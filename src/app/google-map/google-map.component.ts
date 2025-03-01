import { Component, ViewChild, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common'; // Correct import for NgClass

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule], // Fixing NgClass import
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements AfterViewInit {
  @ViewChild('searchBox', { static: true }) searchBox!: ElementRef;

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 26.8467, lng: 80.9462 };
  markerPosition: google.maps.LatLngLiteral = this.center;
  isAddressEntered: boolean = false; 

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
          this.isAddressEntered = true; 
        }
      });
    });
  }

  goToNextPage() {
    this.router.navigate(['/welcome']).then(
      success => console.log(success ? 'Navigation successful!' : 'Navigation failed.'),
      error => console.error('Navigation error:', error)
    );
  }
}
