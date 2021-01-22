import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/app.model';

@Component({
  selector: 'send-claps-category',
  templateUrl: './send-claps-category.component.html',
  styleUrls: ['./send-claps-category.component.scss']
})
export class SendClapsCategoryComponent implements OnInit {
  isLoading: boolean;
  currentUser: User;
  categories: [];
  firstName: string;

  constructor( private api: ApiService, public state: StateService, private router: Router ) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.currentUser = this.state.data.user;
    this.categories = this.state.data.categories;
    this.firstName = this.currentUser.name.split(' ')[0];
  }

  async loadTeam(): Promise<void> {
      this.isLoading = false;
  }

  public selectCategory(categoryName: string): void {
    this.router.navigateByUrl('/send-claps-amount');
    this.state.data.category = categoryName;
  }
}
