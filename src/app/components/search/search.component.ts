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

  constructor(private http: HttpClient, private advertismentService: AdvertismentsService, private router: Router) { 
    console.log(advertismentService.getSavedAds());
  }
  ads: Advertisments[]=[];
  filterDate = '';
  filterSchedule = '';
  filteredAds: Advertisments[] = [];
  currentPage = 1;
  itemsPerPage = 9;
  ngOnInit(): void {
    this.ads = this.advertismentService.getPublicAds();
   }
   
  addAdvertismentBtn(ad: Advertisments) {
    this.advertismentService.setSelectedAd(ad);
    this.router.navigate(['/viewAdvertisment']);

  }
  formatDate(date: string): string {
    const [day, month, year] = date.split('-');
    return `${month}-${day}-${year}`;
  }

  async filterAds() {
    console.log("filterAds called with", this.filterDate, this.filterSchedule);
    console.log("Antes", this.ads)
    const [day, month, year] = this.filterDate.split('-');
    await this.getAds(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`, this.filterSchedule);
    console.log("Despues", this.ads)
}


async getAds(date?: string, time?: string) {
  this.ads = this.advertismentService.getPublicAds(date, time);
  console.log("getAds called with", date, time, "got ads:", this.ads);
}


  get currentAds(): Advertisments[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.ads.slice(startIndex, startIndex + this.itemsPerPage);
  }
  get maxPage(): number {
  return Math.ceil(this.ads.length / this.itemsPerPage);
}
convertDate(date: string): string {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}


  
}
