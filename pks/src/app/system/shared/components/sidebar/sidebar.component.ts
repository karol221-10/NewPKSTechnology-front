import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user;
  isWorker = false;
  // title: string;

  constructor() { }

  ngOnInit() {
    const u = window.localStorage.getItem('User');
    this.user = JSON.parse(u);
    if (this.user.permissions === 'PERM_WORKER') {
      console.log(this.user);
      this.isWorker = true;
    }
    // this.user = JSON.parse(window.localStorage.getItem('user'));
    // this.title = this.user.position.charAt(0).toUpperCase() + this.user.position.slice(1);
  }

}
