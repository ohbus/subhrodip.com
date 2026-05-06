import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SearchHeaderComponent } from '../shared/search-header/search-header';
import { FooterComponent } from '../shared/footer/footer';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [SearchHeaderComponent, FooterComponent, RouterLink],
  templateUrl: './results.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class ResultsComponent {
  private router = inject(Router);
  private contentService = inject(ContentService);

  readonly c = this.contentService.c;

  onHome() {
    this.router.navigate(['/']);
  }
}
