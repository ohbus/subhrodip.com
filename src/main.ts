import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {
  captureSentryException,
  getSentryLoader,
  initializeSentry
} from './app/core/services/sentry.service';

if (globalThis.location?.hash.startsWith('#/')) {
  globalThis.history.replaceState(null, '', globalThis.location.hash.slice(1) || '/');
}

const sentryLoader = getSentryLoader();
initializeSentry(sentryLoader);

bootstrapApplication(App, appConfig)
  .catch((err) => {
    captureSentryException(err, sentryLoader);
    console.error(err);
  });
