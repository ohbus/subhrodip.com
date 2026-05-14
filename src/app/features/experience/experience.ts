import { Component, inject , ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { KnowledgePanelComponent, KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule, KnowledgePanelComponent],
  templateUrl: './experience.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class ExperienceComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;

  get knowledgePanelConfig(): KnowledgePanelConfig {
    return {
      title: this.c().experience.knowledgePanel.title,
      subtitle: this.c().experience.knowledgePanel.subtitle,
      icon: 'work_history',
      actions: [
        {
          label: this.c().experience.knowledgePanel.downloadBtn,
          icon: 'download',
          url: 'https://drive.google.com/file/d/16lFVFcwwck9VQW58WUM78qn39xZohyJR/view',
          primary: true
        },
        {
          label: this.c().experience.knowledgePanel.linkedinBtn,
          icon: 'work',
          url: 'https://linkedin.com/in/ohbusm'
        }
      ],
      footer: {
        type: 'verified_roles',
        items: this.c().common.roles
      }
    };
  }
}
