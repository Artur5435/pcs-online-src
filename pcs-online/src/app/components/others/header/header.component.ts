import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Item } from '../../../models/item';
import { ItemService } from '../../../services/item.service';
import { UserDataService } from '../../../services/user-data.service';
import { UserService } from '../../../services/user.service';
//import { $ } from '../../../../../node_modules/protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})




export class HeaderComponent implements OnInit {

  constructor(
    private itemService: ItemService,
    private userService: UserService
  ) { }



  ngOnInit() {
    //this.cart = new Array<Item>();

    $('.dropdown .drop').on('click', function () {
      $(this).parent().children('.dropItems').toggleClass('active');
    });
    $('.dropdownI .drop, .dropdownI .dropItems').on('click', function () {
      if ($(this).parent().children('.dropItems').hasClass('active')) {
        $(this).parent().children('.dropItems').removeClass('active');
      }
      else {
        $('.dropdownI .dropItems').removeClass('active');
        $(this).parent().children('.dropItems').addClass('active');
      }
    });
    $('.dropdownC .drop').on('click', function () {
      $(this).parent().children('.dropItems').toggleClass('active');
    });
    $(document).on('scroll', function () {
      if($(document).scrollTop() > $(window).height()*0.20)
      {
        $('.menu').css({
          'position' : 'fixed',
          'top' : '0',
          'left' : '0',
          'z-index' : '999'
        })
      }
      else 
      {
        $('.menu').css({
          'position' : 'relative'
        })
      }
    });
  }

  Remove(id: number) {
    this.itemService.Remove(id);
  }

  public trackItem(index: number, item: Item) {
    return item.ID;
  }

  Logout() {
    this.userService.SetUser({ [0]: "", [1]: "", [2]: "" });
    alert("Wylogowano");
  }

}
