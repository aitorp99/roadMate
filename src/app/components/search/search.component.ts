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
  ads: Advertisments[]=[];
  ngOnInit(): void {
    this.ads = this.advertismentService.getPublicAds();
   }
   
  addAdvertismentBtn(ad: Advertisments) {
    this.advertismentService.setSelectedAd(ad);
    this.router.navigate(['/viewAdvertisment']);

  }
}
