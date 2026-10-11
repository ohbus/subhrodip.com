import { Component, inject , ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { LanguagePickerComponent } from '../../../shared/ui/language-picker/language-picker';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-header',
  standalone: true,
  imports: [RouterModule, LanguagePickerComponent],
  templateUrl: './search-header.html',
  styles: []
})
export class SearchHeaderComponent {
  private contentService = inject(ContentService);
  
  readonly c = this.contentService.c;
  readonly currentLang = this.contentService.currentLang;

}
