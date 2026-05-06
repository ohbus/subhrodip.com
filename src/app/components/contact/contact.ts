import { Component } from '@angular/core';
import { SearchHeaderComponent } from '../shared/search-header/search-header';
import { FooterComponent } from '../shared/footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SearchHeaderComponent, FooterComponent],
  templateUrl: './contact.html',
  host: {
    'class': 'flex flex-col flex-grow w-full'
  },
  styles: []
})
export class ContactComponent {}
