import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-page', 
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/welcome']); // Navigates back to the welcome page
  }
}
