import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Subhrodip Mohanta | DevOps & Cloud Consultant and Software Developer', description: 'Search the portfolio of Subhrodip Mohanta, Software Developer and Cloud Consultant.' } },
  { path: 'search', loadComponent: () => import('./components/results/results').then(m => m.ResultsComponent), data: { title: 'Search Results | Subhrodip Mohanta', description: 'General search results for Subhrodip Mohanta.' } },
  { path: 'sde', loadComponent: () => import('./components/sde/sde').then(m => m.SdeComponent), data: { title: 'Projects & SDE | Subhrodip Mohanta', description: 'Explore software development engineering projects, open source contributions, and GitHub repositories.' } },
  { path: 'cde', loadComponent: () => import('./components/cde/cde').then(m => m.CdeComponent), data: { title: 'DevOps & Cloud | Subhrodip Mohanta', description: 'Cloud computing and DevOps expertise, featuring AWS and modern backend infrastructure.' } },
  { path: 'education', loadComponent: () => import('./components/education/education').then(m => m.EducationComponent), data: { title: 'Education | Subhrodip Mohanta', description: 'Educational background, including B.Tech in CSE from UEM Kolkata.' } },
  { path: 'skills', loadComponent: () => import('./components/skills/skills').then(m => m.SkillsComponent), data: { title: 'Skills | Subhrodip Mohanta', description: 'Technical skills including Java, Python, Node JS, Spring, and Microservices architecture.' } },
  { path: 'contact', loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent), data: { title: 'Contact | Subhrodip Mohanta', description: 'Get in touch with Subhrodip Mohanta for software development and cloud consulting opportunities.' } },
  { path: 'go/:slug', loadComponent: () => import('./components/redirect/redirect').then(m => m.RedirectComponent), data: { title: 'Redirecting... | Subhrodip Mohanta', description: 'Redirecting to a specific resource.' } },
  { path: '**', redirectTo: '' }
];
