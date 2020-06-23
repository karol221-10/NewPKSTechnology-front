import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {MainService} from '../shared/services/main.service';
import {formatDate} from '@telerik/kendo-intl';
import {SearchService} from '../../shared/services/search.service';

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

  constructor(private mainService: MainService, private searchService: SearchService) { }

  ngOnInit() {
    this.sub1 = this.mainService.getSchedule()
      .subscribe(track => {
        console.log(track);
        track.schedules.forEach(x => x.busStops.forEach(async q => {
          q.townId = await this.toFormat(q.townId);
          q.arrivalDate = formatDate(new Date(q.arrivalDate), 'g');
          q.departureDate = formatDate(new Date(q.departureDate), 'g');
        }));
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

  async toFormat(id) {
    // tslint:disable-next-line:radix use-isnan
    if (isNaN(Number(id))) {
      return id;
    }
    let result = null;
    await this.searchService.getTrackById(id).then(x => result = x.name);
    return result as string;
  }

}
