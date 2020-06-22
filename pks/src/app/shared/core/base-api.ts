import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';


@Injectable()
export class BaseApi {

  private baseUrl = 'http://localhost:3000/';
  private testUrl = 'http://www.kompikownia.pl:4444/api/';

  private readonly headers: HttpHeaders;
  private readonly token;

  constructor(public httpClient: HttpClient) {

    if (BaseApi.checkToken()) {
      this.token = JSON.parse(window.localStorage.getItem('token')).token;
      this.headers = new HttpHeaders().set('USER_CONTEXT', `Bearer ${this.token}`);
    }

      /* this.httpClient.post<any>('http://www.kompikownia.pl:4444/api/login',
      {login: 'admin@gmail.com', password: '5554432'})*/
  }
  private static checkToken() {
    return JSON.parse(window.localStorage.getItem('token'));
  }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  private getUrlTest(url: string = ''): string {
    return this.testUrl + url;
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

  public deleteTest(url: string = ''): Observable<any> {
    const headers = this.headers;
    return this.httpClient.delete<any>(this.getUrlTest(url), {headers});
  }

  public getTest(url: string = ''): Observable<any> {
    const headers = this.headers;
    return this.httpClient.get<any>(this.getUrlTest(url), {headers});
  }

  public postTest(url: string = '', data: any = {}, isLogin?): Observable<any> {
    let headers;
    const body = JSON.stringify(data);
    if (isLogin) {
      headers = new HttpHeaders().set('content-type', 'application/json');
    } else {
      headers = this.headers.set('content-type', 'application/json');
    }
    return this.httpClient.post<any>(this.getUrlTest(url), body, {headers});
  }

  public async login(data: any = {}): Promise<any> {
    // const body = JSON.stringify(data);
    return await this.postTest('login', data, true).toPromise()
      .then(res => {
        if (res) {
          window.localStorage.setItem('token', JSON.stringify(res));
          return jwt_decode(res.token);
        }
      });
  }


}

