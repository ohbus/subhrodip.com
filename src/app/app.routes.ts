import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ResultsComponent } from './components/results/results';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: ResultsComponent },
  { path: '**', redirectTo: '' }
];
