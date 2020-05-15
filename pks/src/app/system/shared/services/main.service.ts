import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../../../shared/core/base-api';
import {City} from '../models/city.model';


@Injectable()
export class MainService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  public getCity(): Observable<City[]> {
    return this.get('city');
  }

}
