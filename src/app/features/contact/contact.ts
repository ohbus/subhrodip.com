import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { SearchResultItemComponent } from '../../shared/ui/search-result-item/search-result-item';
import { KnowledgePanelComponent, KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';
import { SearchMetricsComponent } from '../../shared/ui/search-metrics/search-metrics';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SearchResultItemComponent, 
    KnowledgePanelComponent, 
    SearchMetricsComponent
  ],
  templateUrl: './contact.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  }
})
export class ContactComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;

  get knowledgePanelConfig(): KnowledgePanelConfig {
    return {
      title: this.c().contact.knowledgePanel.title,
      subtitle: this.c().contact.knowledgePanel.subtitle,
      icon: 'connect_without_contact',
      footer: {
        type: 'link_list',
        linkList: [
          { icon: 'mail', text: 'hi@subhrodip.com', url: 'mailto:hi@subhrodip.com' },
          { icon: 'code', text: 'github.com/ohbus', url: 'https://github.com/ohbus' },
          { icon: 'work', text: 'linkedin.com/in/ohbusm', url: 'https://www.linkedin.com/in/ohbusm/' }
        ]
      }
    };
  }
}
