import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from '../shared/models/city.model';
import {Subscription} from 'rxjs';
import {MainService} from '../shared/services/main.service';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit, OnDestroy {

  isLoaded = false;
  city: City[];
  sub1: Subscription;
  editMode = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.sub1 = this.mainService.getCity()
      .subscribe(city => {
        this.city = city;
        this.isLoaded = true;
        console.log(this.city);
      });
  }

  edit(event) {
    if (event.checked) {
      this.editMode = event.checked;
    } else if (event.checked === undefined) {
      this.editMode = true;
    } else {
      this.editMode = event.checked;
    }
    console.log(event);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
