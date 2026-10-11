import { DOCUMENT } from '@angular/common';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { SeoService } from './seo.service';

function configureSeo(url: string, route: object, language = 'en') {
  const events = new Subject<NavigationEnd>();
  const router = { events, url };
  const content = {
    currentLang: signal(language),
    c: signal({
      common: { name: 'Test Name', roles: ['Engineer'] },
      navigation: { all: 'All', experience: 'Experience', sde: 'SDE', cde: 'CDE', education: 'Education', skills: 'Skills', contact: 'Contact' }
    })
  };
  const title = jasmine.createSpyObj<Title>('Title', ['setTitle']);
  const meta = jasmine.createSpyObj<Meta>('Meta', ['updateTag']);

  TestBed.configureTestingModule({
    providers: [
      SeoService,
      { provide: Router, useValue: router },
      { provide: ActivatedRoute, useValue: route },
      { provide: ContentService, useValue: content },
      { provide: Title, useValue: title },
      { provide: Meta, useValue: meta },
      { provide: DOCUMENT, useValue: document }
    ]
  });

  return { events, router, content, title, meta, service: TestBed.inject(SeoService) };
}

describe('SeoService', () => {
  afterEach(() => document.querySelector('link[rel="canonical"]')?.remove());

  it('walks to the deepest primary route and updates metadata', () => {
    const route = {
      firstChild: {
        firstChild: null,
        outlet: 'primary',
        data: of({ title: 'Contact', description: 'Contact description', robots: 'noindex, nofollow' })
      },
      outlet: 'primary',
      data: of({ title: 'Parent' })
    };
    const { events, content, title, meta, service } = configureSeo('/contact?source=test', route);

    service.init();
    events.next(new NavigationEnd(1, '/contact?source=test', '/contact?source=test'));

    expect(title.setTitle).toHaveBeenCalledWith('Test Name | Contact');
    expect(meta.updateTag).toHaveBeenCalledWith({ name: 'description', content: 'Contact description' });
    expect(meta.updateTag).toHaveBeenCalledWith({ name: 'robots', content: 'noindex, nofollow' });
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href'))
      .toBe(`${window.location.origin}/contact`);

    content.currentLang.set('de');
    TestBed.flushEffects();
    expect(title.setTitle).toHaveBeenCalledWith('Test Name | Contact');
  });

  it('uses localized defaults and fallback route metadata', () => {
    const route = { firstChild: null, outlet: 'primary', data: of({}) };
    const { router, content, title, meta, service } = configureSeo('/unknown?query=1', route, 'de');

    (service as any).updateMetadata({ title: 'Fallback title' });
    expect(title.setTitle).toHaveBeenCalledWith('Test Name | Fallback title');
    expect(meta.updateTag).toHaveBeenCalledWith(jasmine.objectContaining({ name: 'robots', content: 'index, follow' }));

    router.url = '';
    (service as any).updateMetadata({});
    expect(title.setTitle).toHaveBeenCalledWith('Test Name | Engineer');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href'))
      .toBe(`${window.location.origin}/`);

    content.currentLang.set('en');
    TestBed.flushEffects();
    expect(title.setTitle).toHaveBeenCalled();
  });
});
