import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  propertyAddress: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.propertyAddress = navigation.extras.state['address'];
    }
  }

  goBack(): void {
    this.router.navigate(['../']); // Navigates to the previous page
  }

  goNext(): void {
    this.router.navigate(['/next-page']); // Replace 'next-page' with the actual route for the next page
  }
}
