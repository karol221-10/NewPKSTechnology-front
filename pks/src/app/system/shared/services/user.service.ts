import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {BaseApi} from '../../../shared/core/base-api';
import {User} from '../models/user.model';



@Injectable()
export class UserService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  private data: any[] = [];

  public save(data: any, isNew?: boolean): Observable<User> {

    this.reset();

    if (isNew) {
      return this.addUser(data);
    } else {
      return this.updateUser(data);
    }

  }

  public remove(data: any) {
    this.reset();
    this.deleteUser(data).subscribe((x) => console.log(x), (x) => console.log(x));
  }

  private reset() {
    this.data = [];
  }

  public deleteUser(data): Observable<User> {
    return this.delete(`users/${data.id}`);
  }

  public addUser(data): Observable<User> {
    console.log(data);
    return this.postTest('users', data);
  }

  public updateUser(data): Observable<User> {
    return this.put(`users/${data.id}`, data);
  }
}
