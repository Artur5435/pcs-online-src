import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit()
  {
    $(document).on('click', function(event)
    {
      if($(event.target).parents('.dropdown, .dropdownS, .dropdownI, .dropdownC, .dropdownSort ').length == 0)
      {
        $('.dropdown .dropItems, .dropdownS .dropItems, .dropdownI .dropItems, .dropdownSort .dropItems').removeClass('active');
        
      }
      if($(event.target).parents('.menuResp').length == 0)
      {
        $('.menuList').removeClass('active');
      }
    })
  }
}
