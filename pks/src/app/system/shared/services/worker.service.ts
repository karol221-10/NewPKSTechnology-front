import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {BaseApi} from '../../../shared/core/base-api';
import { Worker} from '../models/worker.model';



@Injectable()
export class WorkerService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  private data: any[] = [];

  public save(data: any, isNew?: boolean): Observable<Worker> {

    this.reset();

    if (isNew) {
      return this.addWorker(data);
    }

  }

  private reset() {
    this.data = [];
  }

  public addWorker(data): Observable<Worker> {
    console.log(data);
    return this.postTest('workers', data);
  }


}
