import { ActivatedRoute, Router } from '@angular/router';
import { REDIRECT_MAP } from '../../data/redirects';
import { RedirectComponent } from './redirect';

describe('RedirectComponent', () => {
  beforeEach(() => jasmine.clock().install());
  afterEach(() => jasmine.clock().uninstall());

  it('returns home for an unknown slug', () => {
    const navigate = jasmine.createSpy('navigate');
    const component = new RedirectComponent(
      { snapshot: { paramMap: { get: () => 'missing' } } } as unknown as ActivatedRoute,
      { navigate } as unknown as Router,
      document
    );

    component.ngOnInit();

    expect(navigate).toHaveBeenCalledWith(['/']);
  });

  it('redirects a known slug after the display delay', () => {
    const replace = jasmine.createSpy('replace');
    const fakeDocument = { location: { replace } } as unknown as Document;
    const component = new RedirectComponent(
      { snapshot: { paramMap: { get: () => 'gh' } } } as unknown as ActivatedRoute,
      { navigate: jasmine.createSpy('navigate') } as unknown as Router,
      fakeDocument
    );

    component.ngOnInit();
    jasmine.clock().tick(500);

    expect(replace).toHaveBeenCalledWith(REDIRECT_MAP['gh']);
    component.ngOnDestroy();
  });
});
