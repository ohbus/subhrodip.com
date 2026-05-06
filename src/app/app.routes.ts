import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', loadComponent: () => import('./components/results/results').then(m => m.ResultsComponent) },
  { path: 'sde', loadComponent: () => import('./components/sde/sde').then(m => m.SdeComponent) },
  { path: 'cde', loadComponent: () => import('./components/cde/cde').then(m => m.CdeComponent) },
  { path: 'education', loadComponent: () => import('./components/education/education').then(m => m.EducationComponent) },
  { path: 'skills', loadComponent: () => import('./components/skills/skills').then(m => m.SkillsComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];
