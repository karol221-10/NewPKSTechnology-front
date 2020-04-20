import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  public data;
  isLoaded = false;

  constructor() { }

  ngOnInit() {
  }

  showResults(track) {
    this.data = track;
    console.log('test', this.data);
    this.isLoaded = true;
  }

}
