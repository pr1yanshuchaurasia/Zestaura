

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
  { path: '', component: GoogleMapComponent }, // ✅ Make sure this path exists
  { path: 'welcome', component: WelcomeComponent }, // Optional: Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


