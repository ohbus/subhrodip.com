import { BN_CONTENT } from './bn';
import { DE_CONTENT } from './de';
import { REDIRECT_MAP } from './redirects';

describe('static application data', () => {
  it('keeps every translation usable by the application', () => {
    for (const content of [BN_CONTENT, DE_CONTENT]) {
      expect(content.common.name).toBeTruthy();
      expect(content.common.roles.length).toBeGreaterThan(0);
      expect(content.navigation.contact).toBeTruthy();
    }
  });

  it('keeps redirect targets non-empty', () => {
    expect(Object.keys(REDIRECT_MAP).length).toBeGreaterThan(0);
    expect(Object.values(REDIRECT_MAP).every(target => target.length > 0)).toBeTrue();
  });
});
