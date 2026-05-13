import { Component, OnInit, inject, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchHeaderComponent } from './components/shared/search-header/search-header';
import { FooterComponent } from './components/shared/footer/footer';

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
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

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

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data),
      takeUntilDestroyed()
    ).subscribe(data => {
      const title = data['title'] || 'Subhrodip Mohanta | Senior Software Engineer';
      const description = data['description'] || 'Professional portfolio of Subhrodip Mohanta. Expert in Senior Software Engineering, Cloud Architecture, and Distributed Systems. Explore technical case studies, DevOps implementations, and scalable backend solutions.';
      const keywords = data['keywords'] || 'Subhrodip Mohanta, Senior Software Engineer, Backend Developer, Cloud Architect, DevOps Engineer, Java Design Patterns, Distributed Systems, AWS, Kubernetes, Microservices Architecture';
      const url = `https://subhrodip.com${this.currentUrl()}`;
      
      this.titleService.setTitle(title);
      
      // Standard Meta Tags
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ name: 'keywords', content: keywords });
      this.metaService.updateTag({ name: 'author', content: 'Subhrodip Mohanta' });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
      
      // Open Graph / Facebook
      this.metaService.updateTag({ property: 'og:type', content: 'website' });
      this.metaService.updateTag({ property: 'og:url', content: url });
      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({ property: 'og:description', content: description });
      this.metaService.updateTag({ property: 'og:image', content: 'https://subhrodip.com/assets/og-image.png' }); // Placeholder URL
      
      // Twitter
      this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaService.updateTag({ name: 'twitter:url', content: url });
      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({ name: 'twitter:description', content: description });
      this.metaService.updateTag({ name: 'twitter:image', content: 'https://subhrodip.com/assets/og-image.png' });
    });
  }

  ngOnInit() {}
}
