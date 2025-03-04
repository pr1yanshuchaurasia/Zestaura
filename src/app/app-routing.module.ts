

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { GoogleMapComponent } from './google-map/google-map.component';


// const routes: Routes = [
//   { path: '', component: GoogleMapComponent }, // ✅ Make sure this path exists
//   { path: 'welcome', component: WelcomeComponent }, // Optional: Default route
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { NextPageComponent } from './next-page/next-page.component'; // ✅ Import NextPageComponent

const routes: Routes = [
  { path: '', redirectTo: 'google-map', pathMatch: 'full' }, // Redirect to GoogleMapComponent by default
  { path: 'google-map', component: GoogleMapComponent }, 
  { path: 'welcome', component: WelcomeComponent }, 
  { path: 'next-page', component: NextPageComponent } // ✅ Added NextPageComponent route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



