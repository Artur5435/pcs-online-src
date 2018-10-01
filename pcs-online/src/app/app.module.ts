import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http, HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/others/header/header.component';
import { FooterComponent } from './components/others/footer/footer.component';
import { SearchComponent } from './components/others/search/search.component';
import { SearchResultComponent } from './components/others/search-result/search-result.component';

import { MenuComponent } from './components/others/menu/menu.component';
import { OFirmieComponent } from './components/others/o-firmie/o-firmie.component';
import { RegulaminComponent } from './components/others/regulamin/regulamin.component';
import { KontaktComponent } from './components/others/kontakt/kontakt.component';
import { SklepStacjonarnyComponent } from './components/others/sklep-stacjonarny/sklep-stacjonarny.component';
import { DostawyComponent } from './components/others/dostawy/dostawy.component';
import { PartnersComponent } from './components/others/partners/partners.component';

import { LoginComponent } from './components/useronly/login/login.component';
import { RegisterComponent } from './components/useronly/register/register.component';
import { UserSettingsComponent } from './components/useronly/user-settings/user-settings.component';
import { OrderComponent } from './components/useronly/order/order.component';

import { User } from './models/user';
import { ItemService } from './services/item.service';
import { AppRoutingModule } from './/app-routing.module';

import { OlejeSredniaComponent } from './components/oleje/oleje-srednia/oleje-srednia.component';
import { OlejePremiumComponent } from './components/oleje/oleje-premium/oleje-premium.component';
import { OlejeEkoComponent } from './components/oleje/oleje-eko/oleje-eko.component';
import { OlejeSportComponent } from './components/oleje/oleje-sport/oleje-sport.component';
import { OlejePrzekladnioweComponent } from './components/oleje/oleje-przekladniowe/oleje-przekladniowe.component';

import { FiltryPaliwaComponent } from './components/filtry/filtry-paliwa/filtry-paliwa.component';
import { FiltryPowietrzaComponent } from './components/filtry/filtry-powietrza/filtry-powietrza.component';
import { FiltryOlejuComponent } from './components/filtry/filtry-oleju/filtry-oleju.component';
import { FiltryKabinyComponent } from './components/filtry/filtry-kabiny/filtry-kabiny.component';

import { KosmetykiComponent } from './components/akcesoria/kosmetyki/kosmetyki.component';
import { ZapachyComponent } from './components/akcesoria/zapachy/zapachy.component';
import { LedyComponent } from './components/akcesoria/ledy/ledy.component';
import { WycieraczkiComponent } from './components/akcesoria/wycieraczki/wycieraczki.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MenuComponent,
    WycieraczkiComponent,
    OFirmieComponent,
    RegulaminComponent,
    KontaktComponent,
    SklepStacjonarnyComponent,
    DostawyComponent,
    LoginComponent,
    RegisterComponent,
    UserSettingsComponent,
    OrderComponent,
    OlejeSredniaComponent,
    OlejePremiumComponent,
    OlejeEkoComponent,
    OlejeSportComponent,
    OlejePrzekladnioweComponent,
    FiltryPaliwaComponent,
    FiltryPowietrzaComponent,
    FiltryOlejuComponent,
    FiltryKabinyComponent,
    KosmetykiComponent,
    ZapachyComponent,
    LedyComponent,
    PartnersComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  exports: [BrowserAnimationsModule],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
