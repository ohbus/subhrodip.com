import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.html',
  styles: []
})
export class ResultsComponent {
  constructor(private router: Router) {}

  onHome() {
    this.router.navigate(['/']);
  }
}
