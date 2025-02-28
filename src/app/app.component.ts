import { Component } from '@angular/core';
import { GoogleMapComponent } from './google-map/google-map.component'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'ZestauraApp';
}

