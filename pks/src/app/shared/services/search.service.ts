import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Track} from '../../main-page/search-form/track.model';
import {BaseApi} from '../core/base-api';
import {City} from '../../system/shared/models/city.model';


@Injectable()
export class SearchService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getTrack(form): Observable<any> {
    const formatD = this.updateData(form.data).toJSON().slice(0, 10);
    const formatFrom = this.updateData(form.from).toJSON().slice(10, 24);
    const formatTo = this.updateData(form.to).toJSON().slice(10, 24);
    // const timeFrom = (form.from.toTimeString()).slice(0, 5);
    // const timeTo = (form.to.toTimeString()).slice(0, 5);
    const startTime = formatD + formatFrom;
    const endTime = formatD + formatTo;
    console.log('form:', form);
    console.log(startTime);
    console.log(endTime);
    console.log(form.leavingFrom.value);
    // tslint:disable-next-line:max-line-length
    return this.getTest(`schedule?sourceTownId=${form.leavingFrom.value}&destinationTownId=${form.leavingTo.value}&startTime=${startTime}&endTime=${endTime}`);
  }

  getTrackList(): Observable<any[]> {
    return this.getTest(`town`);
  }

  getTrackById(id) {
    return this.getTest(`town/${id}`).toPromise();
  }

  getTicket(data) {
    // tslint:disable-next-line:max-line-length
    return this.getTest(`ticket?destinationBusStopId=${data.destinationBusStopId}&scheduleId=${data.scheduleId}&sourceBusStopId=${data.sourceBusStopId}`);
  }

  postTicket(data) {
    const body = JSON.stringify(data);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.post('http://www.kompikownia.pl:4444/api/ticket', body, {headers});
  }

  setTicket(data) {
    const body = JSON.stringify(data);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.post('http://www.kompikownia.pl:4444/api/ticket/complete', body , {headers});
  }



  private updateData(data) {
    return  new Date(data.setHours(data.getHours() + 3));
  }


}
