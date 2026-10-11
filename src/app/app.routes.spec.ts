import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { appConfig } from './app.config';
import { routes } from './app.routes';

describe('application routes', () => {
  it('keeps the public routes and private Sentry route configured', () => {
    expect(appConfig.providers?.length).toBeGreaterThan(0);
    const initializer = appConfig.providers?.find(provider =>
      typeof provider === 'object' && provider !== null && 'useFactory' in provider
    ) as { useFactory: () => () => void } | undefined;
    expect(initializer?.useFactory()()).toBeUndefined();
    expect(routes.map(route => route.path)).toEqual([
      '', 'search', 'experience', 'sde', 'cde', 'education', 'skills',
      'contact', 'sentry-test', 'go/:slug', '**'
    ]);

    const sentryRoute = routes.find(route => route.path === 'sentry-test');
    expect(sentryRoute?.data).toEqual(jasmine.objectContaining({
      robots: 'noindex, nofollow'
    }));

    const redirectRoute = routes.find(route => route.path === 'go/:slug');
    expect(redirectRoute?.data).toEqual(jasmine.objectContaining({
      robots: 'noindex, nofollow'
    }));
  });

  it('loads every public page through the router', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create();

    for (const path of ['/', '/search', '/experience', '/sde', '/cde', '/education', '/skills', '/contact', '/sentry-test', '/go/missing']) {
      expect(await harness.navigateByUrl(path)).toBeTruthy();
    }
  });
});
