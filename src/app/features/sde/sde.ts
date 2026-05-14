import { Component, inject , ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { KnowledgePanelComponent, KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sde',
  standalone: true,
  imports: [RouterLink, KnowledgePanelComponent],
  templateUrl: './sde.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
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
