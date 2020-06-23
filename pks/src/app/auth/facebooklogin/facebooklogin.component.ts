import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-facebooklogin',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.css']
})
export class FacebookloginComponent implements OnInit {

  constructor(private cookieService: CookieService, public router: Router) { }

  ngOnInit() {
    window.localStorage.setItem('token', JSON.stringify(this.cookieService.get('CONTEXT_DATA')));
    this.router.navigate(['/home']);
  }

}
