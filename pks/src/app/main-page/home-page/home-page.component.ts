import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SearchService} from '../../shared/services/search.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = 'pks';
  qr;
  qrReady = false;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private searchService: SearchService ) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params.token) {
          const body = {
            payerId: params.PayerID,
            paymentId: params.paymentId
          };
          this.searchService.setTicket(body).toPromise().then((x: any) => {
            this.qr = x.qrCode;
            this.qrReady = true;

          });
        }
        console.log(this.qr);
      });
  }

  print(pdf) {
    pdf.saveAs('Ticket.pdf');
  }
}
