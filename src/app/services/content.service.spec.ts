import { TestBed } from '@angular/core/testing';
import { ContentService } from './content.service';

describe('ContentService', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('keeps the default language when browser storage is blocked', () => {
    spyOn(Storage.prototype, 'getItem').and.throwError('storage blocked');

    const service = TestBed.inject(ContentService);

    expect(service.currentLang()).toBe('en');
  });
});
