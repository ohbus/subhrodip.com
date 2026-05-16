import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { SearchResultItemComponent } from '../../shared/ui/search-result-item/search-result-item';
import { KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';
import { FeatureLayoutComponent } from '../../shared/ui/feature-layout/feature-layout';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cde',
  standalone: true,
  imports: [
    CommonModule, 
    SearchResultItemComponent, 
    FeatureLayoutComponent
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
