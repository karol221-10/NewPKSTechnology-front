import {Component, Inject, OnInit} from '@angular/core';
import { Worker} from '../../../shared/models/worker.model';
import {MainService} from '../../../shared/services/main.service';
import {WorkerService} from '../../../shared/services/worker.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  public view;


  public editDataItem: Worker;
  public isNew: boolean;
  private workerService: WorkerService;

  constructor(@Inject(WorkerService) workerServiceFactory: any, private mainService: MainService) {
    this.workerService = workerServiceFactory();
  }

  public ngOnInit(): void {
    this.mainService.getWorker().subscribe(x => this.view = x.workers);
  }


  public addHandler() {
    this.editDataItem = new Worker();
    this.isNew = true;
  }

  public cancelHandler() {
    this.editDataItem = undefined;
  }

  public saveHandler(worker: Worker) {
    this.workerService.save(worker, this.isNew).toPromise()
      .then(() => this.mainService.getWorker().subscribe(x => this.view = x.workers));

    this.editDataItem = undefined;
  }

}
