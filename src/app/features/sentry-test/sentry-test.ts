import { ChangeDetectionStrategy, Component, inject, InjectionToken } from '@angular/core';
import { SentryService } from '../../core/services/sentry.service';

export const SENTRY_CAPTURE_EXCEPTION = new InjectionToken<(error: unknown) => void>(
  'SENTRY_CAPTURE_EXCEPTION',
  { providedIn: 'root', factory: () => {
    const sentry = inject(SentryService);
    return sentry.captureException.bind(sentry);
  } }
);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sentry-test',
  standalone: true,
  templateUrl: './sentry-test.html'
})
export class SentryTestComponent {
  private readonly captureException = inject(SENTRY_CAPTURE_EXCEPTION);

  triggerError(): void {
    this.captureException(new Error('Sentry production test'));
  }
}
