import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = 
  {
    [0]: "",
    [1]: "",
    [2]: ""
    
  }

  constructor(private http: HttpClient, private userDataService:UserDataService) { }

  register(user : User ) : Observable<User>
  {
    return this.http.post<User>('assets/backend/user/register.php', {login: user["0"], password: user["1"] , mail: user["2"]});
  }

  login(user : User) : Observable<User>
  {
    
    return this.http.post<User>('assets/backend/user/login.php', {login: user["0"], password: user["1"] , mail: user["2"]});
  }
  
  SetUser(user : User)
  {
    this.user = user;
  }

  GetUser()
  {
    return this.user;
  }
}
