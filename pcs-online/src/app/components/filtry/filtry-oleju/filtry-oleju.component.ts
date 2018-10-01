import { Component, OnInit } from '@angular/core';
import { Filter } from '../../../models/filter';
import { FiltersService } from '../../../services/filters.service';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-filtry-oleju',
  templateUrl: './../../items.component.html',
  styleUrls: ['./../../items.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0}),
            stagger(
              '100ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1 })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class FiltryOlejuComponent implements OnInit {

  items: Item[] = [];
  
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

  popedIndex : number;
  popedCount : number = 1;

	constructor(private filtersService: FiltersService, private itemService : ItemService) {
    this.filtersService.getFiltersOleju().subscribe((data) => { this.items =  data;});
    this.StartSort();
   }
  ngOnInit() {
    $("#Title").text("FILTRY OLEJU");
    /*this.items.push({
      Producent: "VALVOLINE", 
      ID:"VAC10W404.1", 
      TypProduktu: "OLEJ",
      Ilosc: 1, 
      CenaBrutto: 69,
      Nazwa: "NAZWA PRODUKTU",
      Opis: "OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS OPIS "
    });*/
    $('.dropdownSort .drop, .dropdownSort .dropItems').on('click', function () {
      if ($(this).parent().children('.dropItems').hasClass('active')) {
        $(this).parent().children('.dropItems').removeClass('active');
      }
      else {
        $('.dropdownSort .dropItems').removeClass('active');
        $(this).parent().children('.dropItems').addClass('active');
      }
    });
  }

  SortBy(param: string) {
    switch (param) {
      case "CR":

        this.items.sort((n1, n2) => {
          if (n1.CenaBrutto > n2.CenaBrutto) {
            return 1;
          }

          if (n1.CenaBrutto < n2.CenaBrutto) {
            return -1;
          }

          return 0;
        });
        break;
      case "CM":
        this.items.sort((n1, n2) => {
          if (n1.CenaBrutto > n2.CenaBrutto) {
            return -1;
          }

          if (n1.CenaBrutto < n2.CenaBrutto) {
            return 1;
          }

          return 0;
        });
        break;
      case "NR":
        this.items.sort((n1, n2) => {
          if (n1.Nazwa > n2.Nazwa) {
            return 1;
          }

          if (n1.Nazwa < n2.Nazwa) {
            return -1;
          }

          return 0;
        });
        break;
      case "NM":
        this.items.sort((n1, n2) => {
          if (n1.Nazwa > n2.Nazwa) {
            return -1;
          }

          if (n1.Nazwa < n2.Nazwa) {
            return 1;
          }

          return 0;
        });
        break;
      case "M":
        this.StartSort();
        break;
    }
  }

  StartSort()
  {
    this.items.sort((n1, n2) => {
      if (n1.Producent == "MILLERS OILS") {
        return 0;
      }

      if (n1.Producent == "ENEOS") {
        return 1;
      }

      if (n1.Producent == "VALVOLINE") {
        return 2;
      }

      if (n1.Producent == "MOTUL") {
        return 3;
      }

      if (n1.Producent == "CASTROL") {
        return 4;
      }

      if (n1.Producent == "ELF") {
        return 5;
      }

      if (n1.Producent == "TOTAL") {
        return 6;
      }

      if (n1.Producent == "MOBIL") {
        return 6;
      }

      return 999;
    });
  }

  

  popUpSet(i)
  {
    this.item = this.items[i];
    this.popedIndex = i;
    $('.popUpProduct').addClass('active');
  }
  
  closePopUp()
  {
    $('.popUpProduct').removeClass('active');
    this.popedCount = 1;
  }

  AddToCart(id)
  {
    //var item = this.oils[id];
    let item : Item = this.items[id];
    item.Ilosc = 1;
    this.itemService.AddToCart(item);
  }

  AddCount()
  {
    this.popedCount++;
  }

  SubCount()
  {
    if(this.popedCount >1)
    {
      this.popedCount--;
    }
  }

  AddToCartPop(id, count)
  {
    //var item = this.oils[id];
    let item : Item = this.items[id];
    item.Ilosc = count;
    this.itemService.AddToCart(item);
  }

  public trackItem (index: number, item: Item) {
    return item.ID;
  }
}
