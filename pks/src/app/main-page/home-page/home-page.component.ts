import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = 'pks';
  public data;
  isLoaded = false;

  constructor() {
  }

  ngOnInit() {
  }

  showResults(track) {
    this.data = track;
    console.log('test', this.data);
    this.isLoaded = true;
  }
}
