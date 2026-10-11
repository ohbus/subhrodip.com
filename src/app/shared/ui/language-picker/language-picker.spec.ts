import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { LanguagePickerComponent } from './language-picker';

describe('LanguagePickerComponent', () => {
  let component: LanguagePickerComponent;
  let fixture: ComponentFixture<LanguagePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagePickerComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('toggles and closes after selecting a language', () => {
    const service = TestBed.inject(ContentService);
    spyOn(service, 'setLanguage').and.callThrough();

    component.toggle();
    component.selectLanguage('en');

    expect(service.setLanguage).toHaveBeenCalledWith('en');
    expect(component.isOpen()).toBeFalse();
  });

  it('closes when clicking outside', () => {
    component.isOpen.set(true);
    const event = new MouseEvent('click');
    Object.defineProperty(event, 'target', { value: document.body });
    component.onClickOutside(event);

    expect(component.isOpen()).toBeFalse();
  });
});
