import { Injectable } from '@angular/core';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public cart : Item[] = [];


  constructor() { 
    //this.AddToCart({ID:"idididid", Typ: "typtyptyp", Cena: 60, Ilosc: 8});

   //this.AddToCart({ID:"idid", Typ: "typtyptyp", Cena: 60, Ilosc: 8});
   // this.AddToCart({ID:"ididid", Typ: "typtyptyp", Cena: 60, Ilosc: 8});
   // this.AddToCart({ID:"id", Typ: "typtyptyp", Cena: 60, Ilosc: 8});
  }

  
  Remove(id : number)
  {
    if(this.cart[id].Ilosc > 1)
    {
      this.cart[id].Ilosc--;
    }
    else
    {
      this.cart.splice(id,1);
    }
    
  }

  AddToCart(item : Item)
  {
    if(this.cart.find(x => x.ID == item.ID))
    {
      //alert(this.itemService.cart.find(x => x.ID == itemLocal.ID).ID + "  " + itemLocal.ID);
      this.cart.find(x => x.ID == item.ID).Ilosc += 1;
      //alert(this.cart.find(x => x.ID == item.ID).Ilosc);
    }
    else
    {
      //alert();
      this.cart.push(item);
    }
    
  }

  AddToCartPop(item : Item, count : number)
  {
    if(this.cart.find(x => x.ID == item.ID))
    {
      //alert(this.itemService.cart.find(x => x.ID == itemLocal.ID).ID + "  " + itemLocal.ID);
      this.cart.find(x => x.ID == item.ID).Ilosc += count;
      //alert(this.cart.find(x => x.ID == item.ID).Ilosc);
    }
    else
    {
      //alert();
      item.Ilosc = count;
      this.cart.push(item);
    }
  }

}
