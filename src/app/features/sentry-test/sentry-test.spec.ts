import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import {
  createSentryLoader,
  getSentryLoader,
  LazySentryErrorHandler,
  SENTRY_SDK_LOADER,
  SentryService,
} from '../../core/services/sentry.service';
import { captureSentryException, initializeSentry } from '../../core/services/sentry.service';
import { SENTRY_CAPTURE_EXCEPTION, SentryTestComponent } from './sentry-test';

describe('SentryTestComponent', () => {
  let fixture: ComponentFixture<SentryTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentryTestComponent],
      providers: [{ provide: SENTRY_CAPTURE_EXCEPTION, useValue: jasmine.createSpy('captureException') }]
    }).compileComponents();
  });

  it('renders the production trigger and invokes it', () => {
    const captureException = TestBed.inject(SENTRY_CAPTURE_EXCEPTION) as jasmine.Spy;
    fixture = TestBed.createComponent(SentryTestComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Sentry production test');
    (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();

    expect(captureException).toHaveBeenCalledTimes(1);
    const error = captureException.calls.mostRecent().args[0] as Error;
    expect(error).toEqual(jasmine.any(Error));
    expect(error.message).toBe('Sentry production test');
  });
});

describe('Sentry capture provider', () => {
  const captureException = jasmine.createSpy('captureException');

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: SentryService, useValue: { captureException } }]
  }));

  it('binds the default provider to the shared Sentry loader', () => {
    const error = new Error('provider test');
    const capture = TestBed.inject(SENTRY_CAPTURE_EXCEPTION);

    capture(error);

    expect(captureException).toHaveBeenCalledWith(error);
    expect(TestBed.inject(SENTRY_SDK_LOADER)).toBe(getSentryLoader());
  });
});

describe('lazy Sentry monitoring', () => {
  let loadSentry: jasmine.Spy;
  let captureException: jasmine.Spy;
  let handleError: jasmine.Spy;
  let createErrorHandler: jasmine.Spy;
  let traceRouter: Router | undefined;
  const router = {} as Router;

  beforeEach(() => {
    traceRouter = undefined;
    captureException = jasmine.createSpy('captureException');
    handleError = jasmine.createSpy('handleError');
    createErrorHandler = jasmine.createSpy('createErrorHandler').and.returnValue({ handleError });
    class FakeTraceService {
      constructor(router: Router) {
        traceRouter = router;
      }
    }
    loadSentry = jasmine.createSpy('loadSentry').and.resolveTo({
      captureException,
      createErrorHandler,
      TraceService: FakeTraceService
    });
    TestBed.configureTestingModule({
      providers: [
        { provide: SENTRY_SDK_LOADER, useValue: loadSentry },
        { provide: Router, useValue: router }
      ]
    });
  });

  it('initializes the shared loader once and delivers errors to the SDK', async () => {
    const serviceError = new Error('service test');
    const handlerError = new Error('handler test');

    const service = TestBed.inject(SentryService);
    const errorHandler = new LazySentryErrorHandler(service);
    service.captureException(serviceError);
    errorHandler.handleError(handlerError);
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(loadSentry).toHaveBeenCalledTimes(1);
    expect(traceRouter).toBe(router);
    expect(captureException).toHaveBeenCalledWith(serviceError);
    expect(createErrorHandler).toHaveBeenCalledTimes(1);
    expect(handleError).toHaveBeenCalledWith(handlerError);
  });

  it('retries after the SDK loader fails', async () => {
    spyOn(console, 'error');
    const firstError = new Error('first load failed');
    const serviceError = new Error('service retry');
    loadSentry.and.returnValues(Promise.reject(firstError), Promise.resolve({
      captureException,
      createErrorHandler,
      TraceService: class {}
    }));

    const service = TestBed.inject(SentryService);
    await Promise.resolve();
    await Promise.resolve();
    service.captureException(serviceError);
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(loadSentry).toHaveBeenCalledTimes(2);
    expect(captureException).toHaveBeenCalledWith(serviceError);
  });

  it('initializes the SDK lazily and retries after module loading fails', async () => {
    const init = jasmine.createSpy('init');
    const browserTracingIntegration = jasmine.createSpy('browserTracingIntegration').and.returnValue({});
    const replayIntegration = jasmine.createSpy('replayIntegration').and.returnValue({});
    const captureException = jasmine.createSpy('captureException');
    const fakeSentry = { init, browserTracingIntegration, captureException };
    const fakeBrowserSentry = { replayIntegration };
    const firstError = new Error('module loading failed');
    const loadModules = jasmine.createSpy('loadModules').and.returnValues(
      Promise.reject(firstError),
      Promise.resolve([fakeSentry, fakeBrowserSentry])
    );
    const loadSentry = createSentryLoader(loadModules);
    const log = spyOn(console, 'error');

    initializeSentry(loadSentry);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(log).toHaveBeenCalled();

    const error = new Error('loader retry');
    initializeSentry(loadSentry);
    captureSentryException(error, loadSentry);
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(loadModules).toHaveBeenCalledTimes(2);
    expect(init).toHaveBeenCalledWith(jasmine.objectContaining({
      environment: 'production',
      tracesSampleRate: 0.1
    }));
    expect(browserTracingIntegration).toHaveBeenCalledTimes(1);
    expect(replayIntegration).toHaveBeenCalledTimes(1);
    expect(captureException).toHaveBeenCalledWith(error);
  });

  it('supports the default dynamic module loader with a controlled initializer', async () => {
    const initialize = jasmine.createSpy('initialize');
    const loadSentry = createSentryLoader(undefined, initialize);

    await loadSentry();

    expect(initialize).toHaveBeenCalledTimes(1);
  });
});
