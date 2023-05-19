import { Injectable } from '@angular/core';
import { Advertisments } from 'src/app/interfaces/advertisments';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentsService {

  constructor() { }
  private selectedAd: Advertisments | null = null;

  setSelectedAd(ad: Advertisments) {
    this.selectedAd = ad;
  }

  getSelectedAd(): Advertisments | null {
    return this.selectedAd;
  }
}
