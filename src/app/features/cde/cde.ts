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
  selector: 'app-cde',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SearchResultItemComponent, 
    KnowledgePanelComponent, 
    SearchMetricsComponent,
    RelatedSearchesComponent
  ],
  templateUrl: './cde.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  }
})
export class CdeComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;

  get knowledgePanelConfig(): KnowledgePanelConfig {
    return {
      title: this.c().common.name,
      subtitle: this.c().cde.knowledgePanel.role,
      icon: 'hub',
      quote: this.c().cde.knowledgePanel.quote,
      snippet: this.c().cde.knowledgePanel.snippet,
      actions: [
        {
          label: this.c().cde.knowledgePanel.contactBtn,
          icon: 'mail',
          routerLink: '/contact',
          primary: true
        }
      ]
    };
  }
}
