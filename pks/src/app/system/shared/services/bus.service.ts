import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {BaseApi} from '../../../shared/core/base-api';
import {Bus} from '../models/bus.model';



@Injectable()
export class BusService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  private data: any[] = [];

  public save(data: any, isNew?: boolean): Observable<Bus> {

    this.reset();

    if (isNew) {
      return this.addBus(data);
    } else {
      return this.updateBus(data);
    }

  }

  public remove(data: any) {
    this.reset();
    this.deleteBus(data).subscribe((x) => console.log(x), (x) => console.log(x));
  }

  private reset() {
    this.data = [];
  }

  public deleteBus(data): Observable<Bus> {
    return this.delete(`bus/${data.id}`);
  }

  public addBus(data): Observable<Bus> {
    return this.post('bus', data);
  }

  public updateBus(data): Observable<Bus> {
    return this.put(`bus/${data.id}`, data);
  }
}
