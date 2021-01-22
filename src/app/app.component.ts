import { Component } from '@angular/core';
import { StateService } from './services/state.service';
import { Location } from '@angular/common';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-claps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: string;
  showHeader: boolean;

  constructor( public state: StateService, private location: Location, router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        const noShowBarURLs = ['/', '/home', '/login'];
        this.showHeader = !noShowBarURLs.some(match => match === this.currentRoute);
      }
    });
  }

  public goBack(): void {
    this.location.back();
  }
}
