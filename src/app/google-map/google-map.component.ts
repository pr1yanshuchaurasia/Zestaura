import { Component, ViewChild, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { Router} from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgClass } from '@angular/common'; 

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule, NgClass], // Add NgClass here
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements AfterViewInit {
  @ViewChild('searchBox', { static: true }) searchBox!: ElementRef;

 

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
  markerPosition: google.maps.LatLngLiteral = this.center;
  isAddressEntered: boolean = false; // Declare it here

  constructor(private ngZone: NgZone, private router: Router) {}

  ngAfterViewInit() {
    const input = this.searchBox.nativeElement;
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
          this.center = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          this.markerPosition = this.center;
          this.zoom = 15;
          this.isAddressEntered = true; // Enable button when address is selected
        }
      });
    });
  }

  checkInput() {
    this.isAddressEntered = this.searchBox.nativeElement.value.trim() !== '';
  }
  goToNextPage() {
    console.log('Navigating to Welcome Page...'); // Debug log
    this.router.navigate(['/welcome']).then(success => {
      if (success) {
        console.log('Navigation successful!');
      } else {
        console.log('Navigation failed.');
      }
    });
  }
}
