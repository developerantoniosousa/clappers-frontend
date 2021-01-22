import { Component } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-claps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( public state: StateService) {}
}
