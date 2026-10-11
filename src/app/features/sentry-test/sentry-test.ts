import { ChangeDetectionStrategy, Component, inject, InjectionToken } from '@angular/core';
import * as Sentry from '@sentry/angular';

export const SENTRY_CAPTURE_EXCEPTION = new InjectionToken<typeof Sentry.captureException>(
  'SENTRY_CAPTURE_EXCEPTION',
  { providedIn: 'root', factory: () => Sentry.captureException }
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
