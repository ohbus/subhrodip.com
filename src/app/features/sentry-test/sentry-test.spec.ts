import { SentryTestComponent } from './sentry-test';

describe('SentryTestComponent', () => {
  it('can trigger a Sentry test event', () => {
    expect(() => new SentryTestComponent().triggerError()).not.toThrow();
  });
});
