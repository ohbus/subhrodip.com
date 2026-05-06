import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchHeaderComponent } from '../shared/search-header/search-header';
import { FooterComponent } from '../shared/footer/footer';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SearchHeaderComponent, FooterComponent, RouterLink],
  templateUrl: './contact.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class ContactComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;
}
