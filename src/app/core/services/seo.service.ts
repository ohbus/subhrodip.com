import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  init() {
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
      mergeMap(route => route.data)
    ).subscribe(data => {
      const title = data['title'] || 'Subhrodip Mohanta | Senior Software Engineer';
      const description = data['description'] || 'Professional portfolio of Subhrodip Mohanta. Expert in Senior Software Engineering, Cloud Architecture, and Distributed Systems. Explore technical case studies, DevOps implementations, and scalable backend solutions.';
      const keywords = data['keywords'] || 'Subhrodip Mohanta, Senior Software Engineer, Backend Developer, Cloud Architect, DevOps Engineer, Java Design Patterns, Distributed Systems, AWS, Kubernetes, Microservices Architecture';
      const url = `https://subhrodip.com${this.router.url}`;
      
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
      this.metaService.updateTag({ property: 'og:image', content: 'https://subhrodip.com/assets/og-image.png' });
      
      // Twitter
      this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaService.updateTag({ name: 'twitter:url', content: url });
      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({ name: 'twitter:description', content: description });
      this.metaService.updateTag({ name: 'twitter:image', content: 'https://subhrodip.com/assets/og-image.png' });
    });
  }
}
