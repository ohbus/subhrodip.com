import { TestBed } from '@angular/core/testing';
import { NavigationEnd, provideRouter, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the router outlet', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('updates shell visibility as navigation changes', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const router = TestBed.inject(Router);

    (router.events as Subject<NavigationEnd>).next(new NavigationEnd(1, '/search', '/search'));
    expect(app.isSearchMode()).toBeTrue();
    expect(app.showFooter()).toBeTrue();

    (router.events as Subject<NavigationEnd>).next(new NavigationEnd(2, '/go/example', '/go/example'));
    expect(app.isSearchMode()).toBeFalse();
    expect(app.showFooter()).toBeFalse();
  });
});
