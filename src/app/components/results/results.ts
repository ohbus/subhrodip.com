import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './results.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class ResultsComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;
}
