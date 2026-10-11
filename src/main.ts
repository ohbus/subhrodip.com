import { bootstrapApplication } from '@angular/platform-browser';
import * as Sentry from '@sentry/angular';
import { appConfig } from './app/app.config';
import { App } from './app/app';

if (globalThis.location?.hash.startsWith('#/')) {
  globalThis.history.replaceState(null, '', globalThis.location.hash.slice(1) || '/');
}

Sentry.init({
  dsn: 'https://4f29550ef10adebdad8d531fed0276cd@o4512236975554560.ingest.de.sentry.io/4512236984860752',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  environment: 'production',
  tracesSampleRate: 0.1,
  tracePropagationTargets: ['localhost'],
  replaysSessionSampleRate: 0.05,
  replaysOnErrorSampleRate: 1.0
});

bootstrapApplication(App, appConfig)
  .catch((err) => {
    Sentry.captureException(err);
    console.error(err);
  });
