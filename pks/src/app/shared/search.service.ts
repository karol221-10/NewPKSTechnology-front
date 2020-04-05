import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Track} from '../main-page/search-form/track.model';


@Injectable()
export class SearchService  {
  constructor(public httpClient: HttpClient) {
  }

  getTrack(form: Track): Observable<Track[]> {
    // const data = (form.data + '').slice(0, 15);
    // console.log();
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<Track[]>(`http://localhost:3000/track?leavingFrom=${form.leavingFrom}&leavingTo=${form.leavingTo}`);
  }


}
