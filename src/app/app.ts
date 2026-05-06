import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  host: {
    'class': 'flex flex-col min-h-screen w-full'
  },
  styles: []
})
export class App {}
