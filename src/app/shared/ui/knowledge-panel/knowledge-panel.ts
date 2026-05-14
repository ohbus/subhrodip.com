import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface KnowledgePanelConfig {
  title: string;
  subtitle?: string;
  icon?: string;
  imageUrl?: string;
  quote?: string;
  snippet?: string;
  actions?: {
    label: string;
    icon?: string;
    url?: string;
    routerLink?: string;
    primary?: boolean;
  }[];
  footer?: {
    type: 'roles' | 'profiles' | 'verified_roles';
    items?: string[];
  };
}

@Component({
  selector: 'app-knowledge-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './knowledge-panel.html',
  host: {
    'class': 'hidden xl:block w-sidebar-width flex-shrink-0 pr-8'
  }
})
export class KnowledgePanelComponent {
  config = input.required<KnowledgePanelConfig>();
}
