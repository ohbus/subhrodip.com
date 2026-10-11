import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([]), { provide: PLATFORM_ID, useValue: 'browser' }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigates to search and experience actions', () => {
    const navigate = spyOn(TestBed.inject(Router), 'navigate');

    component.onSearch();
    component.onExperience();

    expect(navigate).toHaveBeenCalledWith(['/search']);
    expect(navigate).toHaveBeenCalledWith(['/experience']);
  });

  it('types the current role and cleans up its timer', fakeAsync(() => {
    const browserComponent = new HomeComponent(
      'browser',
      TestBed.inject(Router),
      TestBed.inject(ContentService)
    );
    browserComponent.ngOnInit();
    tick(1000);
    expect((browserComponent as any).currentText()).toBeTruthy();

    browserComponent.ngOnDestroy();
    tick(200);
  }));

  it('handles typing and deleting boundaries', fakeAsync(() => {
    const state = component as any;
    state.charIndex = state.roles()[0].length - 1;
    state.type();
    expect(state.isDeleting).toBeTrue();

    state.isDeleting = true;
    state.charIndex = 1;
    state.type();
    expect(state.isDeleting).toBeFalse();
    expect(state.phraseIndex).toBe(1);

    fixture.destroy();
    tick(500);
  }));

  it('does not start the browser timer during server rendering', () => {
    const serverComponent = new HomeComponent(
      'server',
      TestBed.inject(Router),
      TestBed.inject(ContentService)
    );

    serverComponent.ngOnInit();
    serverComponent.ngOnDestroy();
    expect((serverComponent as any).currentText()).toBe('');
  });
});
