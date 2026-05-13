import { Component, inject , ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-education',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './education.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class EducationComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;
}
