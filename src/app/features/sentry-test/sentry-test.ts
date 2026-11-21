import { ChangeDetectionStrategy, Component, inject, InjectionToken } from '@angular/core';
import {
  captureSentryException,
  SENTRY_SDK_LOADER
} from '../../core/services/sentry.service';

export const SENTRY_CAPTURE_EXCEPTION = new InjectionToken<(error: unknown) => void>(
  'SENTRY_CAPTURE_EXCEPTION',
  { providedIn: 'root', factory: () => {
    const loadSentry = inject(SENTRY_SDK_LOADER);
    return (error: unknown) => captureSentryException(error, loadSentry);
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
