import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { SearchResultItemComponent } from '../../shared/ui/search-result-item/search-result-item';
import { KnowledgePanelComponent, KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';
import { SearchMetricsComponent } from '../../shared/ui/search-metrics/search-metrics';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-results',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SearchResultItemComponent, 
    KnowledgePanelComponent, 
    SearchMetricsComponent
  ],
  templateUrl: './results.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  }
})
export class ResultsComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;

  get knowledgePanelConfig(): KnowledgePanelConfig {
    return {
      title: this.c().common.name,
      subtitle: this.c().results.knowledgePanel.role,
      imageUrl: 'social-icons.png',
      snippet: this.c().results.knowledgePanel.snippet,
      actions: [
        {
          label: this.c().results.knowledgePanel.resume,
          icon: 'description',
          url: 'https://drive.google.com/file/d/16lFVFcwwck9VQW58WUM78qn39xZohyJR/view',
          primary: true
        }
      ],
      footer: {
        type: 'profiles'
      }
    };
  }

  get resultsMetrics(): string {
    const m = this.c().results.metrics;
    return `${m.about} ${m.count} ${m.results} (${m.time} ${m.seconds})`;
  }
}
