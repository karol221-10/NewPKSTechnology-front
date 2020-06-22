import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MainService} from '../shared/services/main.service';
import {Bus} from '../shared/models/bus.model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-bus-page',
  templateUrl: './bus-page.component.html',
  styleUrls: ['./bus-page.component.css']
})
export class BusPageComponent implements OnInit, OnDestroy {

  isLoaded = false;
  bus: Bus[];
  sub1: Subscription;
  editMode = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.sub1 = this.mainService.getBus()
      .subscribe(bus => {
        console.log(bus);
        this.bus = bus;
        this.isLoaded = true;
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
    if (event.checked === false) {
      this.ngOnInit();
    }
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
