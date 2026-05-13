import { Component, inject , ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { LanguagePickerComponent } from '../../../shared/ui/language-picker/language-picker';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LanguagePickerComponent],
  templateUrl: './footer.html',
  styles: []
})
export class FooterComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;
  readonly currentLang = this.contentService.currentLang;
}
