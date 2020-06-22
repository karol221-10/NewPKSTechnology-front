import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {BaseApi} from '../../../shared/core/base-api';
import {Bus} from '../models/bus.model';
import {Inspection} from '../models/inspection.model';



@Injectable()
export class BusService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  private data: any[] = [];

  public save(data: any, isNew?: boolean) {
    console.log(data);

    this.reset();

    if (isNew) {
      return this.addBus(data);
    } else {
      return this.updateBus(data);
    }

  }

  public remove(data: any) {
    console.log('remove', data);
    this.reset();
    return this.deleteBus(data).toPromise();
  }

  private reset() {
    this.data = [];
  }

  public deleteBus(data): Observable<Bus> {
    this.deleteTest(`bus/${data.id}/insurance/1`);
    this.deleteTest(`bus/${data.id}/inspection/1`);
    return this.deleteTest(`bus/${data.id}`);
  }

  public addBus(data: Bus): boolean {
    const bus = Object.assign({}, {registrationNumber: data.registrationNumber}, {model: ''});
    console.log(bus);
    this.postTest('bus', bus).toPromise().then((x) => {
      this.postTest(`bus/${x.id}/inspection`, data.inspectionExpiry).subscribe( q => console.log('inspection', q));
      this.postTest(`bus/${x.id}/insurance`, data.insuranceExpiry).subscribe( q => console.log('insurance', q));
    });
    return true;
  }

  public updateBus(data): Observable<Bus> {
    return this.put(`bus/${data.id}`, data);
  }

  public getBusInspection(id): Promise<Inspection> {
    return this.getTest(`bus/${id}/inspection`).toPromise();
  }

  public getBusInsurance(id): Promise<Inspection> {
    return this.getTest(`bus/${id}/insurance`).toPromise();
  }
}
