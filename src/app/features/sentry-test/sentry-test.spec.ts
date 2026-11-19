import { ComponentFixture, TestBed } from '@angular/core/testing';
import { captureSentryException } from '../../core/services/sentry.service';
import {
  LazySentryErrorHandler,
  SentryService,
  initializeSentry
} from '../../core/services/sentry.service';
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
  beforeEach(() => TestBed.configureTestingModule({}));

  it('binds the default provider to the shared Sentry loader', () => {
    expect(TestBed.inject(SENTRY_CAPTURE_EXCEPTION)).toBe(captureSentryException);
  });
});

describe('lazy Sentry monitoring', () => {
  it('initializes the shared loader and captures errors', async () => {
    spyOn(console, 'error');
    const service = new SentryService();
    const captureException = spyOn(service, 'captureException').and.callThrough();
    const handleError = spyOn(service, 'handleError').and.callThrough();
    const errorHandler = new LazySentryErrorHandler(service);
    const serviceError = new Error('service test');
    const handlerError = new Error('handler test');

    initializeSentry();
    service.captureException(serviceError);
    errorHandler.handleError(handlerError);
    await import('@sentry/angular');
    await Promise.resolve();
    await Promise.resolve();

    expect(captureException).toHaveBeenCalledWith(serviceError);
    expect(handleError).toHaveBeenCalledWith(handlerError);
  });
});
