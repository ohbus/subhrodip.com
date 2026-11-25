import { ErrorHandler, Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';

type Sentry = typeof import('@sentry/angular');
type BrowserSentry = typeof import('@sentry/browser');
type SentryErrorHandler = ReturnType<Sentry['createErrorHandler']>;
export type SentrySdkLoader = () => Promise<Sentry>;
export type SentryModuleLoader = () => Promise<[Sentry, BrowserSentry]>;
type SentryInitializer = (Sentry: Sentry, BrowserSentry: BrowserSentry) => void;

function initializeSentrySdk(Sentry: Sentry, BrowserSentry: BrowserSentry): void {
  Sentry.init({
    dsn: 'https://4f29550ef10adebdad8d531fed0276cd@o4512236975554560.ingest.de.sentry.io/4512236984860752',
    integrations: [Sentry.browserTracingIntegration(), BrowserSentry.replayIntegration()],
    environment: 'production',
    tracesSampleRate: 0.1,
    tracePropagationTargets: ['localhost'],
    replaysSessionSampleRate: 0.05,
    replaysOnErrorSampleRate: 1.0
  });
}

export function createSentryLoader(
  loadModules: SentryModuleLoader = () => Promise.all([import('@sentry/angular'), import('@sentry/browser')]),
  initialize: SentryInitializer = initializeSentrySdk
): SentrySdkLoader {
  let sentryModule: Promise<Sentry> | undefined;

  return () => {
    if (!sentryModule) {
      const loading = loadModules().then(([Sentry, BrowserSentry]) => {
        initialize(Sentry, BrowserSentry);
        return Sentry;
      });

      sentryModule = loading.catch(error => {
        sentryModule = undefined;
        throw error;
      });
    }

    return sentryModule;
  };
}

const loadSentry = createSentryLoader();

export function getSentryLoader(): SentrySdkLoader {
  return loadSentry;
}

export const SENTRY_SDK_LOADER = new InjectionToken<SentrySdkLoader>('SENTRY_SDK_LOADER', {
  providedIn: 'root',
  factory: getSentryLoader
});

export function initializeSentry(loader: SentrySdkLoader): void {
  void loader().catch(console.error);
}

export function captureSentryException(error: unknown, loader: SentrySdkLoader): void {
  void loader()
    .then(Sentry => Sentry.captureException(error))
    .catch(console.error);
}

@Injectable({ providedIn: 'root' })
export class SentryService {
  private sentryModule?: Promise<Sentry>;
  private errorHandler?: Promise<SentryErrorHandler>;
  private traceService?: InstanceType<Sentry['TraceService']>;

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
        this.ensureTraceService(Sentry);
        return Sentry.createErrorHandler();
      })
      .catch(error => {
        this.errorHandler = undefined;
        throw error;
      });
    return this.errorHandler;
  }

  private ensureTraceService(Sentry: Sentry): void {
    this.traceService ??= new Sentry.TraceService(this.router);
  }

  captureException(error: unknown): void {
    void this.loadSentrySdk()
      .then(Sentry => {
        this.ensureTraceService(Sentry);
        return Sentry.captureException(error);
      })
      .catch(console.error);
  }

  handleError(error: unknown): void {
    void this.getErrorHandler()
      .then(handler => handler.handleError(error))
      .catch(() => console.error(error));
  }
}

@Injectable()
export class LazySentryErrorHandler implements ErrorHandler {
  constructor(private readonly sentry: SentryService) {}

  handleError(error: unknown): void {
    this.sentry.handleError(error);
  }
}
