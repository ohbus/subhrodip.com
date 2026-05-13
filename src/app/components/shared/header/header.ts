import { Component, inject , ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { LanguagePickerComponent } from '../language-picker/language-picker';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, LanguagePickerComponent],
  templateUrl: './header.html',
  styles: []
})
export class HeaderComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;
  readonly currentLang = this.contentService.currentLang;
}
