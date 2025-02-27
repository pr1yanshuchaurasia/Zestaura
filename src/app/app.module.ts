// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { GoogleMapComponent } from './google-map/google-map.component';
// import { AppRoutingModule } from './app-routing.module';
// import { GoogleMapsModule } from '@angular/google-maps';
// import { WelcomeComponent } from './welcome/welcome.component';

// @NgModule({
//     declarations: [
//         WelcomeComponent, // ✅ Ensure WelcomeComponent is declared
//       ],
 
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     GoogleMapsModule,
//     GoogleMapComponent, // ✅ Import GoogleMapComponent
//   ],
//   providers: [],
//   bootstrap: [WelcomeComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { importProvidersFrom } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component'; // ✅ Import only

@NgModule({
  declarations: [
     // ✅ Only declare non-standalone components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    importProvidersFrom(WelcomeComponent) // ✅ Import standalone component
  ],
  bootstrap: []
})
export class AppModule { }


