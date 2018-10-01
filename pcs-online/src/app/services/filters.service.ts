import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filter } from '../models/filter';
import {Observable} from 'rxjs'
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

	constructor(private http: HttpClient) { }
  
	getFiltersKabiny(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/filtry/all-kabiny.php',{})
	}

	getFiltersPowietrza(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/filtry/all-powietrza.php',{})
	}

	getFiltersPaliwa(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/filtry/all-paliwa.php',{})
	}

	getFiltersOleju(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/filtry/all-oleju.php',{})
	}
}
