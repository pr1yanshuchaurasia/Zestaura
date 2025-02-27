import { Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [
  { path: '', component: GoogleMapComponent },  // Default route
  { path: 'welcome', component: WelcomeComponent } // Welcome Page
];
