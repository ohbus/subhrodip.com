import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-result-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result-item.html',
  host: {
    'class': 'block mb-7 group'
  }
})
export class SearchResultItemComponent {
  icon = input.required<string>();
  logoUrl = input<string>();
  label = input.required<string>();
  breadcrumb = input.required<string>();
  title = input.required<string>();
  url = input<string>();
  snippet = input<string>();
}
