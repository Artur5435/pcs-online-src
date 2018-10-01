import { Injectable } from '@angular/core';
import { Car, Marki, Modele, Roczniki, Silniki, Result, ResultItems } from '../models/marki';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  result: Result =
    {
      Filtry_oleju: [],
      Filtry_paliwa: [],
      Filtry_powietrza: [],
      Filtry_kabiny: [],
      Olej_polecana_szlach: [],
      Oleje_Rekomendowane: [],
      Oleje_zgodne_szlach: []
    };

  constructor(private http: HttpClient) { }

  GetMarkiv2(car: Car): Observable<Marki> {
    return this.http.post<Marki>(
      'assets/backend/search/v2/get-marki.php',
      { Car: car }
    );
  }
  GetModelev2(car: Car): Observable<Modele> {
    return this.http.post<Modele>(
      'assets/backend/search/v2/get-modele.php',
      { Car: car }
    );
  }
  GetRocznikiv2(car: Car): Observable<Roczniki> {
    return this.http.post<Roczniki>(
      'assets/backend/search/v2/get-roczniki.php',
      { Car: car }
    );
  }
  GetSilnikiv2(car: Car): Observable<Silniki> {
    return this.http.post<Silniki>(
      'assets/backend/search/v2/get-silniki.php',
      { Car: car }
    );
  }

  GetResult(car: Car) {
    this.GetResultO(car).subscribe((result) => { this.result = result; });
  }

  GetResultO(car: Car): Observable<Result> {
    return this.http.post<Result>(
      'assets/backend/search/v2/get-result.php',
      { Car: car }
    );
  }

  GetResultItems() : Observable<ResultItems>
  {
    return this.http.post<ResultItems>(
      'assets/backend/search/v2/get-result-items.php',
      { Items: this.result }
    );
  }
}
