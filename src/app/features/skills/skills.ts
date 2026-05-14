import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { SearchResultItemComponent } from '../../shared/ui/search-result-item/search-result-item';
import { KnowledgePanelComponent, KnowledgePanelConfig } from '../../shared/ui/knowledge-panel/knowledge-panel';
import { SearchMetricsComponent } from '../../shared/ui/search-metrics/search-metrics';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    SearchResultItemComponent, 
    KnowledgePanelComponent, 
    SearchMetricsComponent
  ],
  templateUrl: './skills.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  }
})
export class SkillsComponent {
  private contentService = inject(ContentService);
  readonly c = this.contentService.c;

  get knowledgePanelConfig(): KnowledgePanelConfig {
    return {
      title: this.c().skills.knowledgePanel.title,
      subtitle: this.c().skills.knowledgePanel.subtitle,
      icon: 'psychology',
      footer: {
        type: 'roles',
        items: this.c().common.roles
      }
    };
  }

  // Define skill groups for easier iteration if needed, but let's keep it simple for now
}
