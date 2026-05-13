import { Component, OnInit, inject, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchHeaderComponent } from './core/layout/search-header/search-header';
import { FooterComponent } from './core/layout/footer/footer';
import { SeoService } from './core/services/seo.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SearchHeaderComponent, FooterComponent],
  template: `
    @if (isSearchMode()) {
      <app-search-header />
    }
    
    <main class="flex-grow flex flex-col w-full">
      <router-outlet />
    </main>

    @if (showFooter()) {
      <app-footer />
    }
  `,
  host: {
    'class': 'flex flex-col min-h-screen w-full'
  },
  styles: []
})
export class App implements OnInit {
  private router = inject(Router);
  private seoService = inject(SeoService);

  private currentUrl = signal<string>(this.router.url);

  isSearchMode = computed(() => this.currentUrl() !== '/' && !this.currentUrl().startsWith('/go/'));
  showFooter = computed(() => !this.currentUrl().startsWith('/go/'));

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe((event: any) => {
      this.currentUrl.set(event.urlAfterRedirects);
    });

    this.seoService.init();
  }

  ngOnInit() {}
}
