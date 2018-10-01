import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { Item } from '../../../../models/item';
import { ItemService } from '../../../../services/item.service';
import { UserDataService } from '../../../../services/user-data.service';
import { UserService } from '../../../../services/user.service';
//import { $ } from '../../../../../node_modules/protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})




export class HeaderComponent implements OnInit {

  constructor(
    private itemService : ItemService,
    private userService : UserService
  ) { }

  

  ngOnInit() {
    //this.cart = new Array<Item>();

    $('#carret').css('display','block');
    var carretVisibility = true;

    $('#visibility-carret-btn').click(function(){
      console.log(carretVisibility);
      if(!carretVisibility){
        $('#carret').css('display','block');
        carretVisibility = true;
      }else{
        $('#carret').css('display','none');
        carretVisibility = false;
      }
    });

  }

  Remove(id : number)
  {
    this.itemService.Remove(id);
  } 

  public trackItem (index: number, item: Item) {
    return item.ID;
  }

  Logout()
  {
    this.userService.SetUser({[0]: "", [1]: "", [2]:""});
    alert("Wylogowano");
  }

}
