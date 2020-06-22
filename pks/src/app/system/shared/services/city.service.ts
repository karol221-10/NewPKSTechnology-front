import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {BaseApi} from '../../../shared/core/base-api';
import {City} from '../models/city.model';



@Injectable()
export class CityService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  private data: any[] = [];

  public save(data: any, isNew?: boolean): Observable<City> {

    this.reset();

    if (isNew) {
      return this.addCity(data);
    } else {
      return this.updateCity(data);
    }

  }

  public remove(data: any) {
    this.reset();
    this.deleteCity(data).subscribe((x) => console.log(x), (x) => console.log(x));
  }

  private reset() {
    this.data = [];
  }

  public deleteCity(data): Observable<City> {
    return this.delete(`city/${data.id}`);
  }

  public addCity(data): Observable<City> {
    console.log(data);
    return this.postTest('town', data);
  }

  public updateCity(data): Observable<City> {
    return this.put(`city/${data.id}`, data);
  }
}
