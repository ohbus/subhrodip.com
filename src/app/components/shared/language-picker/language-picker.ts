import { Component, inject, signal, HostListener, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, LanguageCode } from '../../../services/content.service';

@Component({
  selector: 'app-language-picker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative inline-block text-left">
      <!-- Trigger -->
      <ng-content></ng-content>

      <!-- Dropdown Menu -->
      @if (isOpen()) {
        <div 
          [ngClass]="placement === 'up' ? 'bottom-full mb-2 left-0' : 'top-full mt-2 right-0'"
          class="absolute w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
          <div class="py-1" role="menu">
            @for (lang of languages; track lang.code) {
              <button
                (click)="selectLanguage(lang.code)"
                class="flex items-center justify-between w-full px-4 py-2 text-sm text-on-surface hover:bg-gray-100 transition-colors"
                [class.bg-blue-50]="currentLang() === lang.code"
                role="menuitem">
                <div class="flex flex-col items-start text-left">
                  <span class="text-body-snippet" [class.text-primary]="currentLang() === lang.code">{{ lang.nativeLabel }}</span>
                  <span class="text-[11px] text-outline">{{ lang.label }}</span>
                </div>
                @if (currentLang() === lang.code) {
                  <span class="material-symbols-outlined text-primary text-lg">check</span>
                }
              </button>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    :host { display: inline-block; }
  `]
})
export class LanguagePickerComponent {
  @Input() placement: 'up' | 'down' = 'up';
  
  private contentService = inject(ContentService);
  private elementRef = inject(ElementRef);

  readonly languages = this.contentService.languages;
  readonly currentLang = this.contentService.currentLang;
  isOpen = signal(false);

  toggle() {
    this.isOpen.update(v => !v);
  }

  selectLanguage(code: LanguageCode) {
    this.contentService.setLanguage(code);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
}
