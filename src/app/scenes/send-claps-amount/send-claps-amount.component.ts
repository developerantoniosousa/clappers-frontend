import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { User } from '../../models/app.model';

@Component({
  selector: 'send-claps-amount',
  templateUrl: './send-claps-amount.component.html',
  styleUrls: ['./send-claps-amount.component.scss']
})
export class SendClapsAmountComponent implements OnInit {
  isLoading: boolean;
  

  constructor( private api: ApiService, private router: Router ) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    await this.loadTeam();
  }  

  async loadTeam(): Promise<void> {
      this.team = await this.api.getUsers().toPromise();
      this.isLoading = false;
  }

  public sendClapToCollaborator(collaborator: User): void {
    this.router.navigateByUrl('/send-claps-team', {
    state: {collaborator}});
  };
}
