import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchHeaderComponent } from '../shared/search-header/search-header';
import { FooterComponent } from '../shared/footer/footer';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SearchHeaderComponent, FooterComponent, RouterLink],
  templateUrl: './skills.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class SkillsComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;
}
