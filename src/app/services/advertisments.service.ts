import { Injectable } from '@angular/core';
import { Advertisments } from 'src/app/interfaces/advertisments';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentsService {

  constructor() { 
    this.publicAds.forEach(ad => {
      let parts = ad.date.split('-');
      ad.date = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
  });
  }
  private selectedAd: Advertisments | null = null;

  private defaultSavedAds: Advertisments[] = [
    {
      name: 'Eddy',
      freeSeat: 3,
      phone: '667256974',
      schedule: '7:30',
      price: 2,
      pickupAddress: '28020 Tetuán, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger',
      date:'5/6/2023'
    },
    {
      name: 'Aitor',
      freeSeat: 1,
      phone: '645186908',
      schedule: '9:00',
      price: 2.5,
      pickupAddress: '28932 Móstoles, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'driver',
      date:'5/6/2023'
    },
    {
      name: 'Ana',
      freeSeat: 2,
      phone: '670097537',
      schedule: '12:00',
      price: 2,
      pickupAddress: '28223 Pozuelo de alarcón, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger',
      date:'6/6/2023'
    },
    {
      name: 'Aitor',
      freeSeat: 2,
      phone: '610206301',
      schedule: '12:00',
      price: 2,
      pickupAddress: '28932 Móstoles, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'driver',
      date:'6/6/2023'
    },
    {
      name: 'Erik',
      freeSeat: 2,
      phone: '630016197',
      schedule: '12:00',
      price: 2,
      pickupAddress: '28223 Pozuelo de alarcón, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger',
      date:'7/6/2023'
    },
    
  ];
  
  private userSavedAds: Advertisments[] = [...this.defaultSavedAds];


  setSelectedAd(ad: Advertisments) {
    this.selectedAd = ad;
  }

  getSelectedAd(): Advertisments | null {
    return this.selectedAd;
  }
  getSavedAds(): Advertisments[] {
    return this.userSavedAds;
  }

  saveAd(ad: Advertisments): void {
    this.userSavedAds.push(ad);
  }
  saveAd2(ad: Advertisments): void {
    this.defaultSavedAds.push(ad);
  }
  
  
  getDriverAds(): Advertisments[] {
    return this.userSavedAds.filter(ad => ad.role === 'driver');
  }
  
  getPassengerAds(): Advertisments[] {
    return this.userSavedAds.filter(ad => ad.role === 'passenger');
  }



  publicAd(ad: Advertisments): void {
    this.publicAds.push(ad);
  }

  getPublicAds(date?: string, time?: string): Advertisments[] {
    let ads = this.publicAds;
  
    if (date) {
      console.log('Entro en DATE');
      const inputDate = new Date(date.split('-').reverse().join('/')).toLocaleDateString('es-ES');
      ads = ads.filter(ad => {
        const adDate = new Date(ad.date.split('-').join('/')).toLocaleDateString('es-ES');
        return adDate === inputDate;
      });
    }
    
    if (time) {
      ads = ads.filter(ad => {
        const adTime = ad.schedule.padStart(5, '0');
        return adTime === time;
      });
    }
  
    return ads;
  }
  
  
  
  
  
filterAds(date?: string, time?: string): Advertisments[] {
  let ads = this.userSavedAds;

  if (date) {
    ads = ads.filter(ad => ad.date === date);
  }

  if (time) {
    ads = ads.filter(ad => ad.schedule === time);
  }

  return ads;
}

private publicAds: Advertisments[] = [
  {
    name: 'Pedro Pérez',
    freeSeat: 3,
    phone: '623-565-901',
    schedule: '07:30',
    price: 2,
    pickupAddress: '28932 Móstoles, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'5-6-2023'
  },
  {
    name: 'María Rodríguez',
    freeSeat: 1,
    phone: '625-476-890',
    schedule: '09:00',
    price: 2.5,
    pickupAddress: '28932 Móstoles, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'6-6-2023'
  },
  {
    name: 'Luis Martínez',
    freeSeat: 2,
    phone: '634-568-321',
    schedule: '12:00',
    price: 2,
    pickupAddress: '28223 Pozuelo de Alarcón, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'5-6-2023'
  },
  {
    name: 'Sara González',
    freeSeat: 2,
    phone: '634-566-879',
    schedule: '16:15',
    price: 1.5,
    pickupAddress: '28223 Pozuelo de Alarcón, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'7-6-2023'
  },
  {
    name: 'David García',
    freeSeat: 3,
    phone: '645-657-904',
    schedule: '15:30',
    price: 2,
    pickupAddress: 'Universidad Europea de Madrid',
    dropAddress: '28660 Boadilla del Monte, Madrid',
    role: 'passenger',
    date:'5-6-2023'
  },
  {
    name: 'Ana Fernández',
    freeSeat: 2,
    phone: '654-357-980',
    schedule: '19:30',
    price: 1.5,
    pickupAddress: '28223 Pozuelo de Alarcón, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'5-6-2023'
  },
  {
    name: 'Alberto Sánchez',
    freeSeat: 3,
    phone: '653-960-384',
    schedule: '07:30',
    price: 2,
    pickupAddress: '28020 Tetuán, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'5-6-2023'
  },
  {
    name: 'Javier Castro',
    freeSeat: 3,
    phone: '652-436-781',
    schedule: '17:30',
    price: 2,
    pickupAddress: 'Universidad Europea de Madrid',
    dropAddress: '28020 Tetuán, Madrid',
    role: 'passenger',
    date: '6-6-2023'
  },  
  {
    name: 'Beatriz Cordero',
    freeSeat: 2,
    phone: '652-456-738',
    schedule: '21:00',
    price: 1.5,
    pickupAddress: '28021 Carabanchel, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'5-6-2023'
  },
  {
    name: 'Carlos Morales',
    freeSeat: 3,
    phone: '659-236-789',
    schedule: '07:30',
    price: 2,
    pickupAddress: 'Universidad Europea de Madrid',
    dropAddress: '28028 Salamanca, Madrid',
    role: 'passenger',
    date:'7-6-2023'
  },
  {
    name: 'Ricardo Torres',
    freeSeat: 2,
    phone: '650-341-291',
    schedule: '08:30',
    price: 2.5,
    pickupAddress: 'Universidad Europea de Madrid',
    dropAddress: '28007 Retiro, Madrid',
    role: 'passenger',
    date:'8-6-2023'
  },
  {
    name: 'Pablo Ramírez',
    freeSeat: 3,
    phone: '632-451-892',
    schedule: '09:30',
    price: 1.5,
    pickupAddress: '28050 Barajas, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'7-6-2023'
  },
  {
    name: 'Laura Ruiz',
    freeSeat: 1,
    phone: '634-781-252',
    schedule: '14:00',
    price: 2,
    pickupAddress: '28223 Pozuelo de Alarcón, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'6-6-2023'
  },
  {
    name: 'Cristina Blanco',
    freeSeat: 2,
    phone: '654-312-790',
    schedule: '18:30',
    price: 1.5,
    pickupAddress: 'Universidad Europea de Madrid',
    dropAddress: '28033 Hortaleza, Madrid',
    role: 'passenger',
    date:'9-6-2023'
  },
  {
    name: 'Diego Navarro',
    freeSeat: 3,
    phone: '645-712-693',
    schedule: '16:30',
    price: 2,
    pickupAddress: '28038 Vallecas, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'8-6-2023'
  },
  {
    name: 'Lidia Romero',
    freeSeat: 1,
    phone: '664-234-817',
    schedule: '19:00',
    price: 1.5,
    pickupAddress: '28223 Pozuelo de Alarcón, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'7-6-2023'
  },
  {
    name: 'Manuel Vargas',
    freeSeat: 3,
    phone: '662-414-781',
    schedule: '20:00',
    price: 2,
    pickupAddress: 'Universidad Europea de Madrid',
    dropAddress: '28020 Tetuán, Madrid',
    role: 'passenger',
    date:'9-6-2023'
  },
  {
    name: 'Susana Guzmán',
    freeSeat: 2,
    phone: '672-426-738',
    schedule: '21:00',
    price: 1.5,
    pickupAddress: '28021 Carabanchel, Madrid',
    dropAddress: 'Universidad Europea de Madrid',
    role: 'passenger',
    date:'8-6-2023'
  }
];

}
