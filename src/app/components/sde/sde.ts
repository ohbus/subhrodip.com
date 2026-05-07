import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-sde',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sde.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class SdeComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;
}
