import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Event } from '../../models/app.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  isLoading: boolean;
  timeline: Event[];

  constructor(private api: ApiService) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    await this.loadTimeline();
  }

  async loadTimeline(): Promise<void> {
    this.timeline = await this.api.getTimeline().toPromise();
    console.log(this.timeline);
    this.isLoading = false;
  }
}
