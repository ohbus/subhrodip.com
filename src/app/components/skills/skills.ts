import { Component } from '@angular/core';
import { SearchHeaderComponent } from '../shared/search-header/search-header';
import { FooterComponent } from '../shared/footer/footer';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SearchHeaderComponent, FooterComponent],
  templateUrl: './skills.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class SkillsComponent {}
