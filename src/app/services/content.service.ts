import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppContent } from '../models/content.model';
import { EN_CONTENT } from '../data/en';

export type LanguageCode = 'en' | 'bn' | 'de';

export interface LanguageMeta {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly LANG_KEY = 'pref_lang';
  
  // Registry of supported languages
  readonly languages: LanguageMeta[] = [
    { code: 'en', label: 'English', nativeLabel: 'English' },
    { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' },
    { code: 'de', label: 'German', nativeLabel: 'Deutsch' }
  ];

  // Internal state
  private currentLangCode = signal<LanguageCode>('en');
  private currentContent = signal<AppContent>(EN_CONTENT);
  private loadedLanguage: LanguageCode = 'en';
  private languageRequest = 0;

  // Reactive selector for the current content
  readonly c = computed(() => this.currentContent());

  // Reactive selector for the current language code
  readonly currentLang = computed(() => this.currentLangCode());

  // Reactive selector for current language metadata
  readonly activeLanguage = computed(() => 
    this.languages.find(l => l.code === this.currentLangCode())!
  );

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeLanguage();
    }
  }

  private initializeLanguage() {
    const saved = this.readStoredLanguage();
    if (saved && this.languages.some(l => l.code === saved)) {
      this.setLanguage(saved);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.split('-')[0] as LanguageCode;
      if (this.languages.some(l => l.code === browserLang)) {
        this.setLanguage(browserLang);
      }
    }
  }

  setLanguage(lang: LanguageCode): Promise<void> {
    const request = ++this.languageRequest;
    this.currentLangCode.set(lang);
    this.persistLanguage(lang);

    // Lazy load non-default languages to optimize initial bundle size
    if (lang === 'en') {
      this.currentContent.set(EN_CONTENT);
      this.loadedLanguage = 'en';
      return Promise.resolve();
    } else {
      return this.loadLanguage(lang)
        .then(content => {
          if (request === this.languageRequest) {
            this.currentContent.set(content);
            this.loadedLanguage = lang;
          }
        })
        .catch(() => {
          if (request === this.languageRequest) {
            this.restoreLanguage(this.loadedLanguage);
          }
        });
    }
  }

  private loadLanguage(lang: Exclude<LanguageCode, 'en'>): Promise<AppContent> {
    if (lang === 'bn') {
      return import('../data/bn').then(m => m.BN_CONTENT);
    }
    return import('../data/de').then(m => m.DE_CONTENT);
  }

  private readStoredLanguage(): LanguageCode | null {
    try {
      const saved = localStorage.getItem(this.LANG_KEY) as LanguageCode | null;
      return saved && this.languages.some(l => l.code === saved) ? saved : null;
    } catch {
      return null;
    }
  }

  private persistLanguage(lang: LanguageCode) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(this.LANG_KEY, lang);
      } catch {
        // Restricted storage should not prevent the app from rendering.
      }
    }
  }

  private restoreLanguage(lang: LanguageCode) {
    this.currentLangCode.set(lang);
    this.persistLanguage(lang);
  }
}
