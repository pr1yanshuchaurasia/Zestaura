import { Component } from '@angular/core';
import { GoogleMapComponent } from './google-map/google-map.component'; 


@Component({
  selector: 'app-root',
  standalone: true, // ✅ If GoogleMapComponent is standalone
  imports: [GoogleMapComponent], // ✅ Add GoogleMapComponent here
  template: '<app-google-map></app-google-map>',
})
export class AppComponent {
  title = 'ZestauraApp';
}

