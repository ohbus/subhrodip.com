import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { LanguagePickerComponent } from '../language-picker/language-picker';

@Component({
  selector: 'app-search-header',
  standalone: true,
  imports: [RouterModule, LanguagePickerComponent],
  templateUrl: './search-header.html',
  styles: []
})
export class SearchHeaderComponent {
  private router = inject(Router);
  private contentService = inject(ContentService);
  
  readonly c = this.contentService.c;
  readonly currentLang = this.contentService.currentLang;

  onHome() {
    this.router.navigate(['/']);
  }
}
