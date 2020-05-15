import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Track} from '../../main-page/search-form/track.model';
import {BaseApi} from '../core/base-api';


@Injectable()
export class SearchService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getTrack(form: Track): Observable<any[]> {
    const timeFrom = (form.from.toTimeString()).slice(0, 5);
    const timeTo = (form.to.toTimeString()).slice(0, 5);
    console.log('form:', form);
    // console.log(timeTo);
    // tslint:disable-next-line:max-line-length
    return this.get(`track?leavingFrom=${form.leavingFrom}&leavingTo=${form.leavingTo}`);
  }

  getTrackList(): Observable<any[]> {
    return this.get(`track`);
  }


}
