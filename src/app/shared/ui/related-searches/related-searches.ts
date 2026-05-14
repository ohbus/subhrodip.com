import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-related-searches',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './related-searches.html',
  host: {
    'class': 'block mb-7'
  }
})
export class RelatedSearchesComponent {
  title = input.required<string>();
  items = input.required<string[]>();
}
