import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private previousUrl: string | null = null;

  constructor(private router: Router) {
    this.router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      setTimeout(() => {
        this.previousUrl = event.urlAfterRedirects;
      });
    });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }
}
