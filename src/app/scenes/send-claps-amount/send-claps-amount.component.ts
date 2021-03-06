import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { ApiService } from '../../services/api.service';
import { User, Recognition } from '../../models/app.model';

@Component({
  selector: 'app-send-claps-amount',
  templateUrl: './send-claps-amount.component.html',
  styleUrls: ['./send-claps-amount.component.scss']
})
export class SendClapsAmountComponent implements OnInit {
  isLoading: boolean;
  currentUser: User;
  categories: any[];
  category: '';
  firstName: string;
  initialClapsToGive: number;
  currentClapsToGive: number;
  currentClapsToGiveGraph: string;
  clapsGiven: number;
  clapsGivenGraph: string;
  success = false;

  constructor( private api: ApiService, public state: StateService, private router: Router ) {}

  async ngOnInit(): Promise<void> {
    this.currentUser = this.state.data.user;
    this.category = this.state.data.category;
    this.firstName = this.currentUser.name.split(' ')[0];
    this.initialClapsToGive = this.state.data.clapsToGive;
    this.resetAmount();
  }

  public addAmount(amount: number): void {
    if (this.currentClapsToGive <= 0) { return; }
    this.currentClapsToGive = this.currentClapsToGive - amount;
    this.state.data.clapsToGive = this.currentClapsToGive;
    this.clapsGiven = this.clapsGiven + amount;
    this.currentClapsToGiveGraph = this.calculatePixels(this.currentClapsToGive, this.initialClapsToGive);
    this.clapsGivenGraph = this.calculatePixels(amount, this.clapsGiven, true);
  }

  public resetAmount(): void {
    this.currentClapsToGive = this.initialClapsToGive;
    this.clapsGivenGraph = '0px';
    this.currentClapsToGiveGraph = this.calculatePixels(this.initialClapsToGive, this.clapsGiven);
    this.state.data.clapsToGive = this.initialClapsToGive;
    this.clapsGiven = 0;
  }

  private calculatePixels(amount: number, prevNumber: number, isGiven?: boolean): string {
    let amountInPixels = amount / prevNumber * 100;
    if (isGiven) {
      amountInPixels = 100 - amountInPixels;
    }
    return amountInPixels + 'px';
  }

  public sendClap(): void {
    this.isLoading = true;

    const clapPayload: Recognition = {
      claps: this.clapsGiven,
      receiver_id: this.currentUser.user,
      category_type: this.category
    };

    this.isLoading = false;
    this.success = true;

    this.api.sendClap(clapPayload).toPromise().then(res => {
      this.isLoading = false;
      this.success = true;
    }).catch(e => {
      console.error(e);
    });

  }

  public goToHome(): void {
    this.router.navigateByUrl('/home');
  }
}
