import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../shared/services/search.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  isTicket = false;
  form: FormGroup;
  ticket;
  info;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'sourceTownId': new FormControl(null),
      'destinationTownId': new FormControl(null),
      'arrivalDate': new FormControl(null),
      'departureDate': new FormControl(null),
      'totalTimeSeconds': new FormControl(null),
      'totalDistance': new FormControl(null),
      'numberOfStations': new FormControl(null),
      'price': new FormControl(null),
    });
  }

  start(event) {
    console.log('event', event);
    this.searchService.getTicket(event.ticketInfo).subscribe( async x => {
      this.info = event.ticketInfo;
      this.ticket = x;
      this.ticket.destinationTownId = await this.toFormat(this.ticket.destinationTownId);
      this.ticket.sourceTownId = await this.toFormat(this.ticket.sourceTownId);
      this.form.patchValue({
        'sourceTownId': x.sourceTownId,
        'destinationTownId': this.ticket.destinationTownId,
        'arrivalDate': (new Date(this.ticket.arrivalDate)).toString().slice(0, 21),
        'departureDate': (new Date(this.ticket.departureDate)).toString().slice(0, 21),
        'totalTimeSeconds': this.ticket.totalTimeSeconds,
        'totalDistance': this.ticket.totalDistance,
        'numberOfStations': this.ticket.numberOfStations,
        'price': this.ticket.price
      });
      return this.isTicket = true;
    });
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

  onSubmit() {
    // this.searchService.postTicket(this.info).subscribe(x => console.log(x));
    console.log(this.info);
    // this.searchService
  }

  send() {
    this.searchService.postTicket(this.info).subscribe((x: any) =>
      window.open(`${x.redirectUrl}`, '_blank')
    );
  }

}
