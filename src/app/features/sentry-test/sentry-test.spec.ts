import { ComponentFixture, TestBed } from '@angular/core/testing';
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
