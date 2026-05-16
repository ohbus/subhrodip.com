import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { SearchResultItemComponent } from '../../shared/ui/search-result-item/search-result-item';
import { KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';
import { FeatureLayoutComponent } from '../../shared/ui/feature-layout/feature-layout';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sde',
  standalone: true,
  imports: [
    CommonModule, 
    SearchResultItemComponent, 
    FeatureLayoutComponent
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
