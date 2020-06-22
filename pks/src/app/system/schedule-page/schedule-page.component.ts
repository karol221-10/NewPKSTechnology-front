import { Component, OnInit } from '@angular/core';
import {Bus} from '../shared/models/bus.model';
import {Subscription} from 'rxjs';
import {MainService} from '../shared/services/main.service';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css']
})
export class SchedulePageComponent implements OnInit {

  track;
  sub1: Subscription;
  isLoaded = false;
  editMode = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.sub1 = this.mainService.getSchedule()
      .subscribe(track => {
        console.log(track);
        // tslint:disable-next-line:no-unused-expression
        track.schedules.totalTimeSeconds = this.formatSeconds(track.schedules.totalTimeSeconds);
        this.track = track.schedules;
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

   formatSeconds(seconds) {
    const date = new Date(1970, 0, 1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
  }

}
