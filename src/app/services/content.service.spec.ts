import { TestBed } from '@angular/core/testing';
import { ContentService } from './content.service';

describe('ContentService', () => {
  beforeEach(() => localStorage.removeItem('pref_lang'));
  afterEach(() => {
    localStorage.removeItem('pref_lang');
    TestBed.resetTestingModule();
  });

  it('keeps the default language when browser storage is blocked', () => {
    spyOn(Storage.prototype, 'getItem').and.throwError('storage blocked');

    const service = TestBed.inject(ContentService);

    expect(service.currentLang()).toBe('en');
  });

  it('loads a supported language and persists the selection', async () => {
    const service = TestBed.inject(ContentService);
    const setItem = spyOn(Storage.prototype, 'setItem').and.callThrough();

    await service.setLanguage('de');

    expect(service.currentLang()).toBe('de');
    expect(service.c().common.name).toBe('Subhrodip Mohanta');
    expect(setItem).toHaveBeenCalledWith('pref_lang', 'de');
  });

  it('loads Bengali content', async () => {
    const service = TestBed.inject(ContentService);

    await service.setLanguage('bn');

    expect(service.currentLang()).toBe('bn');
    expect(service.c().common.name).toBeTruthy();
  });

  it('ignores a language import that finishes after a newer request', async () => {
    const service = TestBed.inject(ContentService);

    const staleRequest = service.setLanguage('bn');
    const activeRequest = service.setLanguage('en');
    await Promise.all([staleRequest, activeRequest]);

    expect(service.currentLang()).toBe('en');
    expect(service.c().common.name).toBe('Subhrodip Mohanta');
  });

  it('exposes metadata for the active language', () => {
    const service = TestBed.inject(ContentService);

    service.setLanguage('en');

    expect(service.activeLanguage().code).toBe('en');
    expect(service.activeLanguage().label).toBe('English');
  });

  it('restores the loaded language when the current import fails', async () => {
    const service = TestBed.inject(ContentService);
    let resolveBengali!: () => void;
    spyOn<any>(service, 'loadLanguage').and.callFake((lang: string) => lang === 'bn'
      ? new Promise(resolve => {
          resolveBengali = () => resolve(service.c());
        })
      : Promise.reject(new Error('load failed')));

    const pendingBengali = service.setLanguage('bn');
    await service.setLanguage('de');

    expect(service.currentLang()).toBe('en');
    expect(service.activeLanguage().code).toBe('en');
    expect(localStorage.getItem('pref_lang')).toBe('en');

    resolveBengali();
    await pendingBengali;
  });

  it('does not restore an older language when its import fails late', async () => {
    const service = TestBed.inject(ContentService);
    await service.setLanguage('bn');

    let rejectOldRequest!: (reason?: unknown) => void;
    spyOn<any>(service, 'loadLanguage').and.returnValue(new Promise((_resolve, reject) => {
      rejectOldRequest = reject;
    }));

    const oldRequest = service.setLanguage('de');
    const activeRequest = service.setLanguage('en');
    rejectOldRequest(new Error('late failure'));
    await Promise.all([oldRequest, activeRequest]);

    expect(service.currentLang()).toBe('en');
    expect(service.c().common.name).toBe('Subhrodip Mohanta');
  });
});
