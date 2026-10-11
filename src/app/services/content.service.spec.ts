import { TestBed } from '@angular/core/testing';
import { ContentService } from './content.service';

describe('ContentService', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('keeps the default language when browser storage is blocked', () => {
    spyOn(Storage.prototype, 'getItem').and.throwError('storage blocked');

    const service = TestBed.inject(ContentService);

    expect(service.currentLang()).toBe('en');
  });

  it('loads a supported language and persists the selection', async () => {
    const service = TestBed.inject(ContentService);
    const setItem = spyOn(Storage.prototype, 'setItem').and.callThrough();

    service.setLanguage('de');
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(service.currentLang()).toBe('de');
    expect(service.c().common.name).toBe('Subhrodip Mohanta');
    expect(setItem).toHaveBeenCalledWith('pref_lang', 'de');
  });

  it('loads Bengali content', async () => {
    const service = TestBed.inject(ContentService);

    service.setLanguage('bn');
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(service.currentLang()).toBe('bn');
    expect(service.c().common.name).toBeTruthy();
  });

  it('ignores a language import that finishes after a newer request', async () => {
    const service = TestBed.inject(ContentService);

    service.setLanguage('bn');
    service.setLanguage('en');
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(service.currentLang()).toBe('en');
    expect(service.c().common.name).toBe('Subhrodip Mohanta');
  });

  it('exposes metadata for the active language', () => {
    const service = TestBed.inject(ContentService);

    service.setLanguage('en');

    expect(service.activeLanguage().code).toBe('en');
    expect(service.activeLanguage().label).toBe('English');
  });

  it('restores the previous language when the current import fails', async () => {
    const service = TestBed.inject(ContentService);
    spyOn<any>(service, 'loadLanguage').and.returnValue(Promise.reject(new Error('load failed')));

    service.setLanguage('de');
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(service.currentLang()).toBe('en');
    expect(service.activeLanguage().code).toBe('en');
  });

  it('does not restore an older language when its import fails late', async () => {
    const service = TestBed.inject(ContentService);
    service.setLanguage('bn');
    await new Promise(resolve => setTimeout(resolve, 0));

    let rejectOldRequest!: (reason?: unknown) => void;
    spyOn<any>(service, 'loadLanguage').and.returnValue(new Promise((_resolve, reject) => {
      rejectOldRequest = reject;
    }));

    service.setLanguage('de');
    service.setLanguage('en');
    rejectOldRequest(new Error('late failure'));
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(service.currentLang()).toBe('en');
    expect(service.c().common.name).toBe('Subhrodip Mohanta');
  });
});
