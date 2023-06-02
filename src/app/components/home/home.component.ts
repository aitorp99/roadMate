import { Component, OnInit } from '@angular/core';
import { Advertisments } from 'src/app/interfaces/advertisments';
import { AdvertismentsService } from 'src/app/services/advertisments.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { ChatsService } from 'src/app/services/chats.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private advertismentService: AdvertismentsService, private router: Router, private chatsService: ChatsService) { }
  myAds: Advertisments[]=[];
  role: 'driver' | 'passenger' = 'driver';
  selectedAd: Advertisments | null = null;

  ngOnInit(): void {
    this.myAds = this.advertismentService.getDriverAds();
  }

  cancelAd(ad: Advertisments) {
    const index = this.myAds.indexOf(ad);
    if (index > -1) {
      this.myAds.splice(index, 1);
    }
  }
  contactUser(ad: Advertisments) {
    let chat = this.chatsService.getChatByUser(ad.name);
  
    if (!chat) {
      chat = this.chatsService.createChat(ad.name);
    }
  
    this.router.navigate(['/specificChat', chat.id]);
  }
  
  
  loadAds(): void {
    if (this.role === 'driver') {
      this.myAds = this.advertismentService.getDriverAds();
    } else {
      this.myAds = this.advertismentService.getPassengerAds();
    }
  }

  switchRole(newRole: 'driver' | 'passenger'): void {
    this.role = newRole;
    this.loadAds();
  }

  showMap(ad: Advertisments) {
    this.advertismentService.setSelectedAd(ad);
    this.router.navigate(['/viewAdvertisment']);

  }
}
