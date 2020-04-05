import { Component } from '@angular/core';
import {Track} from './main-page/search-form/track.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pks';
  public data: Track;
  isLoaded = false;

  constructor() {
  }

  showResults(track) {
    this.data = track;
    console.log('test', this.data);
    this.isLoaded = true;
  }
}


