import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-metrics.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    'class': 'block text-outline text-body-snippet mb-6'
  }
})
export class SearchMetricsComponent {
  metrics = input.required<string>();
}
