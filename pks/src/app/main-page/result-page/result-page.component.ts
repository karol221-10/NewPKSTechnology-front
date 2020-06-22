import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '../../shared/services/search.service';
import { formatDate } from '@telerik/kendo-intl';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  @Output() ticket: EventEmitter<any> = new EventEmitter<any>();
  public data;
  isLoaded = false;
  ticketData;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  async showResults(track) {
    console.log(track);
    this.ticketData = new Object( track);
    track.forEach(x => x.busStops.forEach(async q => {
      q.townId = await this.toFormat(q.townId);
      q.arrivalDate = formatDate(new Date(q.arrivalDate), 'g');
      q.departureDate = formatDate(new Date(q.departureDate), 'g');
    }));
    setTimeout(
      async () => {this.data = [{
        leavingFrom: await this.toFormat(track[0].busStops[0].townId),
        leavingTo: await this.toFormat(track[0].busStops[track[0].busStops.length - 1].townId),
        data: track[0].busStops[0].arrivalDate,
        time: track[0].busStops[0].arrivalDate,
        busStops: track[0].busStops,
        totalDistance: track[0].totalDistance,
        ticketInfo: {
          destinationBusStopId: track[0].busStops[track[0].busStops.length - 1].id,
          scheduleId: track[0].id,
          sourceBusStopId: track[0].busStops[0].id
        }
      }]; }, 1000
    );
    console.log(this.data);

    setTimeout(() => this.isLoaded = true, 2000);
    // this.isLoaded = true;

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

  show(info) {
    console.log(info);
    console.log(this.ticketData);
    this.ticket.emit(this.data[0]);
    this.isLoaded = false;

  }

}
