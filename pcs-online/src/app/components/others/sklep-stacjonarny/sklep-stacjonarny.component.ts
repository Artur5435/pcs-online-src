import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sklep-stacjonarny',
  templateUrl: './sklep-stacjonarny.component.html',
  styleUrls: ['./sklep-stacjonarny.component.scss']
})
export class SklepStacjonarnyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isOpen()
  {
    var date = new Date();
    if(date.getDay() > 0 && date.getDay() != 6)
    {
      if(date.getHours() >7 && date.getHours()< 18)
      {
        return "TERAZ OTWARTE";
      }
      else 
      {
        return "TERAZ ZAMKNIĘTE";
      }
    }
    else if(date.getDay() == 6)
    {
      if(date.getHours() > 7 && date.getHours()< 14)
      {
        return "TERAZ OTWARTE";
      }
      else 
      {
        return "TERAZ ZAMKNIĘTE";
      }
    }
    else 
    {
      return "TERAZ ZAMKNIĘTE";
    }
  }

}
