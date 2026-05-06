import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search-header.html',
  styles: []
})
export class SearchHeaderComponent {
  constructor(private router: Router) {}

  onHome() {
    this.router.navigate(['/']);
  }
}
