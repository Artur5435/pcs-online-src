import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserDataService } from '../../../services/user-data.service';
import { UserData } from '../../../models/user-data';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';
import { OrderService } from '../../../services/order.service';
import { SendForm } from '../../../models/sendform';
import * as $ from 'jquery';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})


export class OrderComponent implements OnInit {


  userData: UserData =
    {
      FirstName: "",
      LastName: "",
      City: "",
      Street: "",
      NIP: "",
      PostalCode: "",
      HouseNum: "",
      AppartmentNum: "",
      Login: ""

    }

    sendForms : SendForm[];

    choosenSendType : number = 0;

  constructor(
    private itemService: ItemService,
    private userDataService: UserDataService,
    private userService: UserService,
    private orderService: OrderService
  ) {
    userDataService.GetData(userService.GetUser()["0"]).subscribe((result) => {
      this.userData = result;

    });
    this.sendForms= [
      {
        Opis: "Kurier INPOST płatne przelewem",
        Cena: 20
      },
      {
        Opis: "Kurier INPOST płatne za pobraniem",
        Cena: 25
      },
      {
        Opis: "Kurier INPOST paczkomat",
        Cena: 16
      },
      {
        Opis: "Kurier GLS",
        Cena: 25
      },
      {
        Opis: "Odbiór osobisty w sklepie",
        Cena: 0
      }
    ];
  }

  ngOnInit() {
    $(".choosen").on('click', function()
  {
    //$(".choosen").removeClass('active');
   // $(this).addClass('active');
  })
  }

  Sumuj() {
    var suma = 0;
    this.itemService.cart.forEach(x => suma += x.CenaBrutto * x.Ilosc);
    suma += this.sendForms[this.choosenSendType].Cena;
    return suma;
  }

  choose(i)
  {
    this.choosenSendType = i;
  }

  Autofill() {
    this.UpdateData();
  }

  UpdateData() {
    document.getElementById("FirstNameOrder").nodeValue = this.userData.FirstName;
    document.getElementById("LastNameOrder").nodeValue = this.userData.LastName;
    document.getElementById("CityOrder").nodeValue = this.userData.City;
    document.getElementById("StreetOrder").nodeValue = this.userData.Street;
    document.getElementById("NIPOrder").nodeValue = this.userData.NIP;
    document.getElementById("PostalCodeOrder").nodeValue = this.userData.PostalCode;
    document.getElementById("HouseNumOrder").nodeValue = this.userData.HouseNum;
    document.getElementById("AppartmentNumOrder").nodeValue = this.userData.AppartmentNum;
  }


  Remove(id: number) {
    this.itemService.Remove(id);
  }

  public trackItem(index: number, item: Item) {
    return item.ID;
  }

  SendOrder() {
    this.orderService.SendOrder(this.userData, this.sendForms[this.choosenSendType]).subscribe((result) => { this.itemService.cart = []; alert("zamówienie zostało wysłane"); });
  }

}
