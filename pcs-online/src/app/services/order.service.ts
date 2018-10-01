import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { User } from '../models/user';
import { ItemService } from './item.service';
import { UserDataService } from './user-data.service';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { UserData } from '../models/user-data';
import { SendForm } from '../models/sendform';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http : HttpClient, 
    private userService : UserService,
    private itemService:ItemService, 
    private userDataService : UserDataService) 
    {

    }

  SendOrder(UserData : UserData, SendForm : SendForm) : Observable<User>
  {
    var data = 
    {
      Client :
      {
        Data: this.userService.user["0"]
      },
      Data: UserData,
      SendType: SendForm,
      Products: 
      {
        Cart: this.itemService.cart
      }
    };
    return this.http.post<User>('assets/backend/order/send-order.php', data );
  }

}
