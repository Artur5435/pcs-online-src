import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Marki, Modele, Roczniki, Silniki, Car } from '../../../models/marki';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //'hfaeuoefh', 'hfaeuoefh', 'hfaeuoefh', 'hfaeuoefh', 'hfaeuoefh', 'hfaeuoefh'

  markiv2: Marki = { Marki: [] };
  modelev2: Modele = { Modele: [] };
  rocznikiv2: Roczniki = { Roczniki: [] };
  silnikiv2: Silniki = { Silniki: [] };

  carv2: Car =
    {
      Marka: "",
      Rocznik: "",
      Model: "",
      Silnik: ""
    }

  constructor(private searchService: SearchService) {
    this.searchService.GetMarkiv2(this.carv2).subscribe((result) => { this.markiv2 = result; this.sortedMarki = this.markiv2.Marki; });

  }


  sortedMarki: string[];
  sortedModele: string[];
  sortedRoczniki: string[];
  sortedSilniki: string[];

  ngOnInit() {

   
    $('.dropdownS .drop, .dropdownS .dropItems').on('click', function () {
      if($(this).parent().children('.dropItems').hasClass('active'))
      {
        $(this).parents().children('.dropItems').removeClass('active');
      }
      else 
      {
        $('.dropdownS .dropItems').removeClass('active');
        $(this).parent().children('.dropItems').addClass('active');
      }
    });
  }

  ParseMarka() {
    var input = $("#markav2").val();
    if (input == "") {
      //this.searchService.GetMarkiv2(this.carv2).subscribe((result) => { this.markiv2 = result; this.sortedMarki = this.markiv2.Marki; });
    }
    this.sortedMarki = this.markiv2.Marki.filter(
      marka =>
        marka.includes(input.toString().toLocaleUpperCase(), 0)
    );
    return this.sortedMarki;
  }

  ParseModel() {
    var input = $("#modelv2").val();
    this.sortedModele = this.modelev2.Modele.filter(
      model =>
        model.includes(input.toString().toLocaleUpperCase(), 0)
    );
    return this.sortedModele;
  }

  ParseSilnik() {
    var input = $("#silnikv2").val();
    this.sortedSilniki = this.silnikiv2.Silniki.filter(
      silnik =>
        silnik.includes(input.toString().toLocaleUpperCase(), 0)
    );
    return this.sortedSilniki;
  }

  ParseRocznik() {
    var input = $("#rocznikv2").val();

    this.sortedRoczniki = this.rocznikiv2.Roczniki.filter(
      rocznik =>
        rocznik.includes(input.toString().toLocaleUpperCase(), 0));
    /*{
      if(input == "")
    {
      return true;
    }
    var rok = parseInt(input.toString());
    var splitted = rocznik.split("do");
    var splitted_od = splitted[0].split("-")[1];
    var splitted_do =  splitted[1];//.split("-")[1];
    console.log(splitted_do)
    if(splitted_do.includes("teraz"))
    {
      if(rok >= parseInt(splitted_od))
      {
        return true;
      }
    }
    else 
    {
      var splitted_do_rok =  splitted_do.split("-")[1];
      console.log(splitted_do_rok)
      if(rok >= parseInt(splitted_od) && rok <= parseInt(splitted_do_rok))
      {
        return true;
      }
    }
    return false;
    
}, 0);*/
    return this.sortedRoczniki;
  }


  SelectMarkav2(marka) {

    this.carv2.Marka = this.markiv2.Marki[marka];
    $("#markav2").text(this.carv2.Marka);

    this.carv2.Rocznik = "";
    this.carv2.Model = "";
    this.carv2.Silnik = "";

    this.rocznikiv2 = { Roczniki: [] };
    this.modelev2 = { Modele: [] };
    this.silnikiv2 = { Silniki: [] };

    $("#rocznikv2").text("ROK PRODUKCJI");
    $("#modelv2").text("MODEL");
    $("#silnikv2").text("SILNIK");

    this.searchService.GetModelev2(this.carv2).subscribe((result) => { this.modelev2 = result; });
  }

  SelectModelv2(model) {

    this.carv2.Model = this.modelev2.Modele[model];
    $("#modelv2").text(this.carv2.Model);

    this.carv2.Rocznik = "";
    this.carv2.Silnik = "";

    this.rocznikiv2 = { Roczniki: [] };
    this.silnikiv2 = { Silniki: [] };

    $("#rocznikv2").text("ROK PRODUKCJI");
    $("#silnikv2").text("SILNIK");

    this.searchService.GetRocznikiv2(this.carv2).subscribe((result) => { this.rocznikiv2 = result; });
  }

  SelectRocznikv2(rocznik) {

    this.carv2.Rocznik = this.rocznikiv2.Roczniki[rocznik];
    $("#rocznikv2").text(this.carv2.Rocznik);

    this.carv2.Silnik = "";

    this.silnikiv2 = { Silniki: [] };

    $("#silnikv2").text("SILNIK");

    this.searchService.GetSilnikiv2(this.carv2).subscribe((result) => { this.silnikiv2 = result; });
  }

  SelectSilnikv2(silnik) {
    this.carv2.Silnik = this.silnikiv2.Silniki[silnik];
    $("#silnikv2").text(this.carv2.Silnik);
    this.searchService.GetResult(this.carv2);
  }


}
