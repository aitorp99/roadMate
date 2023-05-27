import { Component, OnInit } from '@angular/core';
import { Advertisments } from 'src/app/interfaces/advertisments';
import { AdvertismentsService } from 'src/app/services/advertisments.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 


declare module 'leaflet' {
  let Routing: any;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient, private advertismentService: AdvertismentsService, private router: Router) { }

  ngOnInit(): void {
  }

  ads: Advertisments[] = [
    {
      name: 'Anunciante 1',
      freeSeat: 3,
      phone: '123-456-789',
      schedule: '7:30',
      price: 2,
      pickupAddress: '28932 Móstoles, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger'
    },
    {
      name: 'Anunciante 2',
      freeSeat: 1,
      phone: '987-654-321',
      schedule: '9:00',
      price: 2.5,
      pickupAddress: '28932 Móstoles, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger'
    },
    {
      name: 'Anunciante 3',
      freeSeat: 2,
      phone: '987-654-321',
      schedule: '12:00',
      price: 2,
      pickupAddress: '28223 Pozuelo de alarcón, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger'
    },
    {
      name: 'Anunciante 4',
      freeSeat: 2,
      phone: '987-654-321',
      schedule: '14:15',
      price: 1.5,
      pickupAddress: '28223 Pozuelo de alarcón, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger'
    },
    {
      name: 'Anunciante 5',
      freeSeat: 3,
      phone: '987-654-321',
      schedule: '15:45pm',
      price: 2,
      pickupAddress: 'Universidad Europea de Madrid',
      dropAddress: '28660 Boadilla del Monte, Madrid',
      role: 'passenger'
    }
  ];

  addAdvertismentBtn(ad: Advertisments) {
    this.advertismentService.setSelectedAd(ad);
    this.router.navigate(['/viewAdvertisment']);

  }
}
