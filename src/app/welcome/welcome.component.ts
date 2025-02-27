import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  template: `<h1>Welcome to Zestaura!</h1>`,
  styles: [`h1 { text-align: center; margin-top: 20px; color: green; }`]
})
export class WelcomeComponent {}
