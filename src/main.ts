import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { captureSentryException, initializeSentry } from './app/core/services/sentry.service';

if (globalThis.location?.hash.startsWith('#/')) {
  globalThis.history.replaceState(null, '', globalThis.location.hash.slice(1) || '/');
}

initializeSentry();

bootstrapApplication(App, appConfig)
  .catch((err) => {
    captureSentryException(err);
    console.error(err);
  });
