import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { ResultItems } from '../../../models/marki';
import { Item } from '../../../models/item';
import { ItemService } from '../../../services/item.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  resultItems: ResultItems =
    {
      Filtry_oleju: [],
      Filtry_paliwa: [],
      Filtry_powietrza: [],
      Filtry_kabiny: [],
      Oleje_polecane: [{
        Producent: "",
        ID: "",
        TypProduktu: "",
        CenaBrutto: 0,
        Ilosc: 1,
        Nazwa: "",
        Opis: ""
      }],
      Oleje_eko: [{
        Producent: "",
        ID: "",
        TypProduktu: "",
        CenaBrutto: 0,
        Ilosc: 1,
        Nazwa: "",
        Opis: ""
      }],
      Oleje_mid: [],
      Oleje_prem: [],
      Oleje_sport: []
    }

  item: Item =
    {
      Producent: "",
      ID: "",
      TypProduktu: "",
      CenaBrutto: 0,
      Ilosc: 1,
      Nazwa: "",
      Opis: ""
    };

  popedIndex: number;
  popedCount: number = 1;
  popedTable: number = 0;

  constructor(
    private searchService: SearchService,
    private itemService: ItemService
  ) {
    searchService.GetResultItems().subscribe((result) => { this.resultItems = result })
  }

  ngOnInit() {

    $('.type').on('click', function () {
      $(".results").removeClass("active");
      $(this).parent().parent().children(".results").toggleClass("active");
    });

  }

  popUpSet(i, table) {
    let itemLocal;
    switch (table) {
      case 0:
        itemLocal = this.resultItems.Oleje_polecane[i];
        break;
      case 1:
        itemLocal = this.resultItems.Oleje_eko[i];
        break;
      case 2:
        itemLocal = this.resultItems.Oleje_mid[i];
        break;
      case 3:
        itemLocal = this.resultItems.Oleje_prem[i];
        break;
    }
    this.popedIndex = i;
    this.popedTable = table;
    this.item = itemLocal;
    $('.popUpProduct').addClass('active');
  }

  closePopUp() {
    $('.popUpProduct').removeClass('active');
    this.popedCount = 1;
  }

  AddToCart(id) {
    //var item = this.oils[id];
    let item: Item = this.resultItems.Oleje_polecane[id];
    this.itemService.AddToCart(item);
  }

  AddCount() {
    this.popedCount++;
  }

  SubCount() {
    if (this.popedCount > 1) {
      this.popedCount--;
    }
  }

  AddToCartPop(id, count) {
    let itemLocal;
    switch (this.popedTable) {
      case 0:
        itemLocal = this.resultItems.Oleje_polecane[id];
        break;
      case 1:
        itemLocal = this.resultItems.Oleje_eko[id];
        break;
      case 2:
        itemLocal = this.resultItems.Oleje_mid[id];
        break;
      case 3:
        itemLocal = this.resultItems.Oleje_prem[id];
        break;
    }
    itemLocal.Ilosc = count;
    this.itemService.AddToCart(itemLocal);
  }

  public trackItem(index: number, item: Item) {
    return item.ID;
  }

  AddToCartNotMain(id, table) {
    let itemLocal;
    switch (table) {
      case 1:
        itemLocal = this.resultItems.Oleje_eko[id];
        break;
      case 2:
        itemLocal = this.resultItems.Oleje_mid[id];
        break;
      case 3:
        itemLocal = this.resultItems.Oleje_prem[id];
        break;
    }
    this.itemService.AddToCart(itemLocal);
  }

}
