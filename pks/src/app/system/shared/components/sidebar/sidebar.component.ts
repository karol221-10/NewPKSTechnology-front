import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: User;
  title: string;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.title = this.user.position.charAt(0).toUpperCase() + this.user.position.slice(1);
  }

}
