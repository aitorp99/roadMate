import { Injectable } from '@angular/core';
import { Advertisments } from 'src/app/interfaces/advertisments';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentsService {

  constructor() { }
  private selectedAd: Advertisments | null = null;

  private defaultSavedAds: Advertisments[] = [
    {
      name: 'Aitor',
      freeSeat: 3,
      phone: '667256974',
      schedule: '7:30',
      price: 2,
      pickupAddress: '28932 Móstoles, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger'
    },
    {
      name: 'Eddy',
      freeSeat: 1,
      phone: '645186908',
      schedule: '9:00',
      price: 2.5,
      pickupAddress: '28932 Móstoles, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'driver'
    },
    {
      name: 'Alberto',
      freeSeat: 2,
      phone: '670097537',
      schedule: '12:00',
      price: 2,
      pickupAddress: '28223 Pozuelo de alarcón, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger'
    },
    {
      name: 'Ana',
      freeSeat: 2,
      phone: '610206301',
      schedule: '12:00',
      price: 2,
      pickupAddress: '28223 Pozuelo de alarcón, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'driver'
    },
    {
      name: 'Erik',
      freeSeat: 2,
      phone: '630016197',
      schedule: '12:00',
      price: 2,
      pickupAddress: '28223 Pozuelo de alarcón, Madrid',
      dropAddress: 'Universidad Europea de Madrid',
      role: 'passenger'
    }
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
  getDriverAds(): Advertisments[] {
    return this.userSavedAds.filter(ad => ad.role === 'driver');
  }
  
  getPassengerAds(): Advertisments[] {
    return this.userSavedAds.filter(ad => ad.role === 'passenger');
  }
  
}
