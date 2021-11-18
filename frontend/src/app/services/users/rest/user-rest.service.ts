import {Injectable} from '@angular/core';
import {User} from '../../../models/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  constructor(private _http: HttpClient) {
  }

  getUser(userId: string): Observable<User> {
    return this._http.get<User>(`/user/${userId}`);
  }
}
