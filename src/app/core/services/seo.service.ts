import { effect, Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ContentService } from '../../services/content.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private contentService = inject(ContentService);
  private document = inject(DOCUMENT);
  private routeData: Record<string, string> | undefined;

  constructor() {
    effect(() => {
      this.contentService.currentLang();
      this.contentService.c();
      if (this.routeData) {
        this.updateMetadata(this.routeData);
      }
    });
  }

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
      this.routeData = data;
      this.updateMetadata(data);
    });
  }

  private updateMetadata(data: Record<string, string>) {
      const section = this.router.url.split('?')[0].split('/')[1] || 'home';
      const sectionLabels: Record<string, string> = {
        home: this.contentService.c().common.roles[0],
        search: this.contentService.c().navigation.all,
        experience: this.contentService.c().navigation.experience,
        sde: this.contentService.c().navigation.sde,
        cde: this.contentService.c().navigation.cde,
        education: this.contentService.c().navigation.education,
        skills: this.contentService.c().navigation.skills,
        contact: this.contentService.c().navigation.contact,
      };
      const title = `${this.contentService.c().common.name} | ${sectionLabels[section] || data['title']}`;
      const localizedDescription = `${this.contentService.c().common.name} — ${sectionLabels[section] || this.contentService.c().common.roles.join(', ')}`;
      const description = this.contentService.currentLang() === 'en'
        ? data['description'] || localizedDescription
        : localizedDescription;
      const keywords = data['keywords'] || 'Subhrodip Mohanta, Senior Software Engineer, Backend Developer, Cloud Architect, DevOps Engineer, Java Design Patterns, Distributed Systems, AWS, Kubernetes, Microservices Architecture';
      const robots = data['robots'] || 'index, follow';
      const url = window.location.href;
      
      this.titleService.setTitle(title);
      const canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
        ?? this.document.head.appendChild(this.document.createElement('link'));
      canonical.rel = 'canonical';
      canonical.href = `${window.location.origin}${this.router.url.split('?')[0] || '/'}`;
      
      // Standard Meta Tags
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ name: 'keywords', content: keywords });
      this.metaService.updateTag({ name: 'author', content: 'Subhrodip Mohanta' });
      this.metaService.updateTag({ name: 'robots', content: robots });
      
      // Open Graph / Facebook
      this.metaService.updateTag({ property: 'og:type', content: 'website' });
      this.metaService.updateTag({ property: 'og:url', content: url });
      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({ property: 'og:description', content: description });
      this.metaService.updateTag({ property: 'og:image', content: 'https://subhrodip.com/wordmark.png' });
      
      // Twitter
      this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaService.updateTag({ name: 'twitter:url', content: url });
      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({ name: 'twitter:description', content: description });
      this.metaService.updateTag({ name: 'twitter:image', content: 'https://subhrodip.com/wordmark.png' });
  }
}
