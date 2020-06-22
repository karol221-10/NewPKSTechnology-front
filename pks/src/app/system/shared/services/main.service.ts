import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../../../shared/core/base-api';
import {City} from '../models/city.model';
import {Bus} from '../models/bus.model';

@Injectable()
export class MainService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  public getCity(): Observable<City[]> {
    return this.getTest('town');
  }

  public getBus(): Observable<Bus[]> {
    return this.getTest('bus');
  }
  public getEditBus(): Observable<Bus[]> {
    return this.get('bus');
  }

  public getWorker(): Observable<any> {
    return this.getTest('workers');
  }

  public getUser(): Observable<any> {
    return this.getTest('users');
  }

  public getSchedule() {
    return this.getTest('schedule');
  }

}
