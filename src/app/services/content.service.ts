import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppContent } from '../models/content.model';
import { EN_CONTENT } from '../data/en';
import { BN_CONTENT } from '../data/bn';
import { DE_CONTENT } from '../data/de';

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

  // Internal state for the current language code
  private currentLangCode = signal<LanguageCode>('en');

  // Reactive selector for the current content
  readonly c = computed(() => {
    switch (this.currentLangCode()) {
      case 'bn': return BN_CONTENT;
      case 'de': return DE_CONTENT;
      default: return EN_CONTENT;
    }
  });

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
      this.currentLangCode.set(saved);
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
  }
}
