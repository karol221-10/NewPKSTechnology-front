import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../shared/models/user.model';
import { AuthService } from '../../../../shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  // user: User;
  // title: string;

  constructor(private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit() {
    // this.user = JSON.parse(window.localStorage.getItem('user'));
    // this.title = this.user.name;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
