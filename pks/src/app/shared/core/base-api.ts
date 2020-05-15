import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class BaseApi {

  private baseUrl = 'http://localhost:3000/';


  constructor(public httpClient: HttpClient) {}


  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.httpClient.get<any>(this.getUrl(url));
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.httpClient.post<any>(this.getUrl(url), data);
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.httpClient.put<any>(this.getUrl(url), data);
  }

  public delete(url: string = '', data: any = {}): Observable<any> {
    return this.httpClient.delete<any>(this.getUrl(url), data);
  }

}

