import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisments } from 'src/app/interfaces/advertisments';
import { AdvertismentsService } from 'src/app/services/advertisments.service';
import { Router } from '@angular/router'; 
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as NodeGeocoder from 'node-geocoder';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-view-advertisment',
  templateUrl: './view-advertisment.component.html',
  styleUrls: ['./view-advertisment.component.scss']
})
export class ViewAdvertismentComponent implements OnInit {

  constructor(private http: HttpClient, private advertismentService: AdvertismentsService, private router: Router) { }
  ad: Advertisments | null = null;

    async ngOnInit(): Promise<void> {
      this.ad = this.advertismentService.getSelectedAd();
      if (this.ad) {
        this.initMap();
      } else {
        // No hay anuncio seleccionado. Podrías redirigir al usuario de vuelta a la página de búsqueda, o mostrar un mensaje de error.
      }
    }
  

  map!: L.Map;
  redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41], // size of the icon
    shadowSize: [41, 41], // size of the shadow
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  });

async initMap(): Promise<void> {
  if (!this.ad) {
    console.error('Advertisements data is not available');
    return;
  }
  
  const pickupCoordinates = await this.getAddressCoordinates(this.ad.pickupAddress);
  const dropCoordinates = await this.getAddressCoordinates(this.ad.dropAddress);

  this.map = L.map('map').setView(pickupCoordinates, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(this.map);
  
  const routingControl = L.Routing.control({
    waypoints: [
      L.latLng(pickupCoordinates),
      L.latLng(dropCoordinates)
    ],
    router: new L.Routing.osrmv1({
      language: 'en',
      profile: 'car'
    }),
    lineOptions: {
      styles: [{color: 'blue', opacity: 0.6, weight: 4}]
    },
    createMarker: function() { return null; },  
    routeWhileDragging: false,
    show: true,
    collapsible: true
  }).addTo(this.map);

  routingControl.on('routeselected', (e: any) => {
    const route = e.route;  

    let instructions = '<h2>Instrucciones de la ruta</h2><ol>';
    for (let i = 0; i < route.instructions.length; i++) {
      const instruction = route.instructions[i];
      instructions += `<li>${instruction.text}</li>`;
    }
    instructions += '</ol>';

    document.getElementById('route-instructions')!.innerHTML = instructions;
  });

  // Esto esconde el panel de instrucciones
  setTimeout(() => {
    const routingContainer = document.querySelector('.leaflet-routing-container') as HTMLElement;
    if (routingContainer) {
        routingContainer.style.display = 'none';
    }
  }, 100);

  L.marker(pickupCoordinates, {icon: this.redIcon}).addTo(this.map).bindPopup(this.ad.pickupAddress);
  L.marker(dropCoordinates, {icon: this.redIcon}).addTo(this.map).bindPopup(this.ad.dropAddress);
}

 


  getAddressCoordinates(address: string): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      this.http.get<any>('https://nominatim.openstreetmap.org/search?format=json&q=' + address)
        .subscribe(data => {
          if (data && data[0] && data[0].lat && data[0].lon) {
            resolve([+data[0].lat, +data[0].lon]);
          } else {
            reject('Failed to get coordinates for address: ' + address);
          }
        }, error => {
          console.error('Error getting address coordinates:', error);
          reject(error);
        });
    });
  }

  apuntarse(): void {
    this.advertismentService.setSelectedAd(this.ad!);
    this.router.navigate(['/home']);
  }

}
