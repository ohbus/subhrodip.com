import { ErrorHandler, Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';

type Sentry = typeof import('@sentry/angular');
type BrowserSentry = typeof import('@sentry/browser');
type SentryErrorHandler = ReturnType<Sentry['createErrorHandler']>;
export type SentrySdkLoader = () => Promise<Sentry>;

let sentryModule: Promise<Sentry> | undefined;
let traceService: InstanceType<Sentry['TraceService']> | undefined;

function loadSentry(): Promise<Sentry> {
  if (!sentryModule) {
    const loading = Promise.all([import('@sentry/angular'), import('@sentry/browser')])
      .then(([Sentry, BrowserSentry]) => {
        Sentry.init({
          dsn: 'https://4f29550ef10adebdad8d531fed0276cd@o4512236975554560.ingest.de.sentry.io/4512236984860752',
          integrations: [Sentry.browserTracingIntegration(), BrowserSentry.replayIntegration()],
          environment: 'production',
          tracesSampleRate: 0.1,
          tracePropagationTargets: ['localhost'],
          replaysSessionSampleRate: 0.05,
          replaysOnErrorSampleRate: 1.0
        });
        return Sentry;
      });

    sentryModule = loading.catch(error => {
      sentryModule = undefined;
      throw error;
    });
  }

  return sentryModule;
}

export const SENTRY_SDK_LOADER = new InjectionToken<SentrySdkLoader>('SENTRY_SDK_LOADER', {
  providedIn: 'root',
  factory: () => loadSentry
});

function ensureTraceService(Sentry: Sentry, router: Router): void {
  traceService ??= new Sentry.TraceService(router);
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
  private sentryModule?: Promise<Sentry>;
  private errorHandler?: Promise<SentryErrorHandler>;

  constructor(
    @Inject(SENTRY_SDK_LOADER) private readonly loadSdk: SentrySdkLoader,
    private readonly router: Router
  ) {
    void this.getErrorHandler().catch(console.error);
  }

  private loadSentrySdk(): Promise<Sentry> {
    this.sentryModule ??= this.loadSdk().catch(error => {
      this.sentryModule = undefined;
      throw error;
    });
    return this.sentryModule;
  }

  private getErrorHandler(): Promise<SentryErrorHandler> {
    this.errorHandler ??= this.loadSentrySdk()
      .then(Sentry => {
        ensureTraceService(Sentry, this.router);
        return Sentry.createErrorHandler();
      })
      .catch(error => {
        this.errorHandler = undefined;
        throw error;
      });
    return this.errorHandler;
  }

  captureException(error: unknown): void {
    void this.loadSentrySdk()
      .then(Sentry => Sentry.captureException(error))
      .catch(console.error);
  }

  handleError(error: unknown): void {
    void this.getErrorHandler().then(handler => handler.handleError(error)).catch(console.error);
  }
}

@Injectable()
export class LazySentryErrorHandler implements ErrorHandler {
  constructor(private readonly sentry: SentryService) {}

  handleError(error: unknown): void {
    this.sentry.handleError(error);
  }
}
