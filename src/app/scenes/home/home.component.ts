import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { Dashboard } from '../../models/app.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  dashboard: Dashboard;

  constructor( private api: ApiService, private router: Router ) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    await this.loadDashboard();
  }  

  async loadDashboard(): Promise<void> {
      this.dashboard = await this.api.getDashboard().toPromise();
      this.isLoading = false;
  }

  public sendClap(): void {
    this.router.navigateByUrl('/send-claps');
  };

}
