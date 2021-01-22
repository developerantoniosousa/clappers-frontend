import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/app.model';

@Component({
  selector: 'app-send-claps-team',
  templateUrl: './send-claps-team.component.html',
  styleUrls: ['./send-claps-team.component.scss']
})
export class SendClapsTeamComponent implements OnInit {
  @ViewChild('searchCollaborator', { static: true }) searchCollaborator: ElementRef;
  isLoading: boolean;
  isSearching: boolean;
  currentState: object;
  team: User[];

  constructor( private api: ApiService, public state: StateService, private router: Router ) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    await this.loadTeam();

    fromEvent(this.searchCollaborator.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      filter(response => response.length > 2),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.isSearching = true;

      this.api.getUsers(text).subscribe((response) => {
        this.isSearching = false;
        this.team = response.docs;
      }, (err) => {
        this.isSearching = false;
        console.error(err);
      });
    });
  }

  async loadTeam(): Promise<void> {
      const team = await this.api.getUsers().toPromise();
      this.team = team.docs;
      this.isLoading = false;
  }

  public sendClapToCollaborator(collaborator: User): void {
    this.router.navigateByUrl('/send-claps-category');
    this.state.data.user = collaborator;
  }
}
