import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { SearchResultItemComponent } from '../../shared/ui/search-result-item/search-result-item';
import { KnowledgePanelComponent, KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';
import { SearchMetricsComponent } from '../../shared/ui/search-metrics/search-metrics';
import { RelatedSearchesComponent } from '../../shared/ui/related-searches/related-searches';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sde',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SearchResultItemComponent, 
    KnowledgePanelComponent, 
    SearchMetricsComponent,
    RelatedSearchesComponent
  ],
  templateUrl: './sde.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  }
})
export class SdeComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;

  get knowledgePanelConfig(): KnowledgePanelConfig {
    return {
      title: this.c().common.name,
      subtitle: this.c().common.roles[0],
      icon: 'computer',
      quote: this.c().sde.knowledgePanel.quote,
      snippet: this.c().sde.knowledgePanel.snippet,
      actions: [
        {
          label: this.c().sde.knowledgePanel.githubBtn,
          icon: 'code',
          url: 'https://github.com/ohbus',
          primary: true
        }
      ]
    };
  }
}
