import { Component, inject , ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { KnowledgePanelComponent, KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cde',
  standalone: true,
  imports: [RouterLink, KnowledgePanelComponent],
  templateUrl: './cde.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
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
