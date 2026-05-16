import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { SearchResultItemComponent } from '../../shared/ui/search-result-item/search-result-item';
import { KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';
import { FeatureLayoutComponent } from '../../shared/ui/feature-layout/feature-layout';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SearchResultItemComponent, FeatureLayoutComponent],
  templateUrl: './education.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  }
})
export class EducationComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;

  get knowledgePanelConfig(): KnowledgePanelConfig {
    return {
      title: this.c().education.knowledgePanel.title,
      subtitle: this.c().education.knowledgePanel.subtitle,
      icon: 'school',
      footer: {
        type: 'info_list',
        infoList: [
          { label: this.c().education.knowledgePanel.degree, value: this.c().education.knowledgePanel.degree },
          { label: this.c().education.knowledgePanel.univ, value: this.c().education.knowledgePanel.univ },
          { label: this.c().education.knowledgePanel.grad, value: this.c().education.knowledgePanel.grad }
        ]
      }
    };
  }
}
