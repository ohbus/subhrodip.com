import { ErrorHandler, Injectable } from '@angular/core';

type Sentry = typeof import('@sentry/angular');
type BrowserSentry = typeof import('@sentry/browser');

let sentryModule: Promise<Sentry> | undefined;

function loadSentry(): Promise<Sentry> {
  sentryModule ??= Promise.all([import('@sentry/angular'), import('@sentry/browser')])
    .then(([Sentry, BrowserSentry]) => {
      Sentry.init({
        dsn: 'https://4f29550ef10adebdad8d531fed0276cd@o4512236975554560.ingest.de.sentry.io/4512236984860752',
        integrations: [BrowserSentry.browserTracingIntegration(), BrowserSentry.replayIntegration()],
        environment: 'production',
        tracesSampleRate: 0.1,
        tracePropagationTargets: ['localhost'],
        replaysSessionSampleRate: 0.05,
        replaysOnErrorSampleRate: 1.0
      });
      return Sentry;
    });

  return sentryModule;
}

export function initializeSentry(): void {
  void loadSentry().catch(console.error);
}

export function captureSentryException(error: unknown): void {
  void loadSentry()
    .then(Sentry => Sentry.captureException(error))
    .catch(console.error);
}

@Injectable({ providedIn: 'root' })
export class SentryService {
  private readonly errorHandler = loadSentry().then(Sentry => Sentry.createErrorHandler());

  captureException(error: unknown): void {
    captureSentryException(error);
  }

  handleError(error: unknown): void {
    void this.errorHandler.then(handler => handler.handleError(error)).catch(console.error);
  }
}

@Injectable()
export class LazySentryErrorHandler implements ErrorHandler {
  constructor(private readonly sentry: SentryService) {}

  handleError(error: unknown): void {
    this.sentry.handleError(error);
  }
}
