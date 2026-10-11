import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as Sentry from '@sentry/angular';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sentry-test',
  standalone: true,
  template: `
    <main class="flex flex-col items-center justify-center gap-4 min-h-[60vh] px-4 text-center">
      <h1 class="text-2xl font-medium text-on-surface">Sentry production test</h1>
      <p class="text-on-surface-variant">Click the button to send a test exception to Sentry.</p>
      <button type="button" class="bg-primary text-white px-6 py-2 rounded" (click)="triggerError()">
        Trigger Sentry error
      </button>
    </main>
  `
})
export class SentryTestComponent {
  triggerError(): void {
    Sentry.captureException(new Error('Sentry production test'));
  }
}
