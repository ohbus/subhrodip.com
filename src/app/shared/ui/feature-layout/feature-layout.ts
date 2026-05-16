import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMetricsComponent } from '../search-metrics/search-metrics';
import { RelatedSearchesComponent } from '../related-searches/related-searches';
import { KnowledgePanelComponent, KnowledgePanelConfig } from '../knowledge-panel/knowledge-panel';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-feature-layout',
  standalone: true,
  imports: [
    CommonModule, 
    SearchMetricsComponent, 
    RelatedSearchesComponent, 
    KnowledgePanelComponent
  ],
  templateUrl: './feature-layout.html',
  host: {
    'class': 'flex-grow flex w-full md:px-0 py-4 gap-16 font-body-snippet min-h-[80vh]'
  }
})
export class FeatureLayoutComponent {
  metrics = input<string>();
  knowledgePanelConfig = input.required<KnowledgePanelConfig>();
  relatedSearches = input<{ title: string; items: { label: string; url?: string }[] }>();
}
