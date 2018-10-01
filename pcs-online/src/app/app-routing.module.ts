import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', redirectTo: 'szukaj', pathMatch:"full"},
  { path: 'szukaj', component: SearchComponent  },
  { path: 'wycieraczki', component: WycieraczkiComponent  },
  { path: 'o-firmie', component: OFirmieComponent  },
  { path: 'regulamin', component: RegulaminComponent  },
  { path: 'kontakt', component: KontaktComponent  },
  { path: 'sklep-stacjonarny', component: SklepStacjonarnyComponent  },
  { path: 'logowanie', component: LoginComponent  },
  { path: 'rejestracja', component: RegisterComponent  },
  { path: 'dostawy', component: DostawyComponent  },
  { path: 'ustawienia', component: UserSettingsComponent},
  { path: 'zamowienie', component: OrderComponent },
  { path: 'oleje-srednia', component: OlejeSredniaComponent  },
  { path: 'oleje-premium', component: OlejePremiumComponent  },
  { path: 'oleje-eko', component: OlejeEkoComponent  },
  { path: 'oleje-sport', component: OlejeSportComponent  },
  { path: 'oleje-przekladniowe', component: OlejePrzekladnioweComponent  },
  { path: 'filtry-paliwa', component: FiltryPaliwaComponent  },
  { path: 'filtry-powietrza', component: FiltryPowietrzaComponent  },
  { path: 'filtry-oleju', component: FiltryOlejuComponent  },
  { path: 'filtry-kabiny', component: FiltryKabinyComponent  },
  { path: 'kosmetyki', component: KosmetykiComponent  },
  { path: 'zapachy', component: ZapachyComponent  },
  { path: 'ledy', component: LedyComponent  },
  { path: 'wycieraczki', component: WycieraczkiComponent  },
  { path: 'partnerzy', component: PartnersComponent  },
  { path: 'wynik', component: SearchResultComponent  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
