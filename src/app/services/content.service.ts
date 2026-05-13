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
    const saved = localStorage.getItem(this.LANG_KEY) as LanguageCode;
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

  setLanguage(lang: LanguageCode) {
    this.currentLangCode.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.LANG_KEY, lang);
    }

    // Lazy load non-default languages to optimize initial bundle size
    if (lang === 'en') {
      this.currentContent.set(EN_CONTENT);
    } else if (lang === 'bn') {
      import('../data/bn').then(m => this.currentContent.set(m.BN_CONTENT));
    } else if (lang === 'de') {
      import('../data/de').then(m => this.currentContent.set(m.DE_CONTENT));
    }
  }
}
