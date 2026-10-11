import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SearchHeaderComponent } from './search-header';

describe('SearchHeaderComponent', () => {
  let fixture: ComponentFixture<SearchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchHeaderComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchHeaderComponent);
    fixture.detectChanges();
  });

  it('links the brand to the home route', () => {
    expect(fixture.nativeElement.querySelector('a')?.getAttribute('href')).toBe('/');
  });
});
