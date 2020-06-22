import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from '../shared/services/main.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-worker-page',
  templateUrl: './worker-page.component.html',
  styleUrls: ['./worker-page.component.css']
})
export class WorkerPageComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  sub2: Subscription;

  isLoaded = false;
  selectedTab = 0;
  editMode = false;
  workers: [];
  users: [];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.sub1 =
      this.mainService.getUser()
        .subscribe((users: any) => {
          this.users = users.users;
          this.isLoaded = true;
        });

    this.isLoaded = false;
    this.sub2 = this.mainService.getWorker()
      .subscribe((workers: any) => {
        this.workers = workers.workers;
        this.isLoaded = true;
        console.log(this.workers);
      });
  }

  show(event) {
    console.log(event);
    if (event.checked ) {
      this.editMode = event.checked;
    } else if (event.checked === undefined) {
      this.editMode = true;
    } else {
      this.editMode = event.checked;
    }
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
