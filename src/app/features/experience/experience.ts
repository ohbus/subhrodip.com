import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { SearchResultItemComponent } from '../../shared/ui/search-result-item/search-result-item';
import { KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';
import { FeatureLayoutComponent } from '../../shared/ui/feature-layout/feature-layout';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SearchResultItemComponent, 
    FeatureLayoutComponent
  ],
  templateUrl: './experience.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  }
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
