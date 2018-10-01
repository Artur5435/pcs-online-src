import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userData : UserData;

  constructor(private http : HttpClient) { }

  GetData(login : string) : Observable<UserData>
  {
    return this.http.post<UserData>('assets/backend/user/user-data-get.php', {Login: login});
  }

  SetData(userData : UserData) : Observable<UserData>
  {
    return this.http.post<UserData>('assets/backend/user/user-data-set.php', userData);
  }

}
