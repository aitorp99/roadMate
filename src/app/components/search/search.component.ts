import { Component, OnInit } from '@angular/core';
import { Advertisments } from 'src/app/interfaces/advertisments';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }
  ads: Advertisments[] = [
    {
      name: 'Anunciante 1',
      pickup: 'Punto de recogida 1',
      freeSeat: 3,
      phone: '123-456-789',
      schedule: '7:30',
      price: 2
    },
    {
      name: 'Anunciante 2',
      pickup: 'Punto de recogida 2',
      freeSeat: 1,
      phone: '987-654-321',
      schedule: '9:00',
      price: 2.5
    },
    {
      name: 'Anunciante 3',
      pickup: 'Punto de recogida 2',
      freeSeat: 2,
      phone: '987-654-321',
      schedule: '12:00',
      price: 2
    },
    {
      name: 'Anunciante 4',
      pickup: 'Punto de recogida 2',
      freeSeat: 2,
      phone: '987-654-321',
      schedule: '14:15',
      price: 1.5
    },
    {
      name: 'Anunciante 5',
      pickup: 'Punto de recogida 2',
      freeSeat: 3,
      phone: '987-654-321',
      schedule: '15:45pm',
      price: 2
    }
  ];
  ngOnInit(): void {
  }
  addAdvertismentBtn() {

  }
}
