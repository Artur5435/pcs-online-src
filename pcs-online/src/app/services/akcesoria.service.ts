import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accesory } from '../models/accesory';
import {Observable} from 'rxjs'
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class AkcesoriaService {

  constructor(private http: HttpClient) { }
  
	getZapachy(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/akcesoria/all-zapachy.php',{})
	}

	getLedy(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/akcesoria/all-ledy.php',{})
	}

	getKosmetyki(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/akcesoria/all-kosmetyki.php',{})
	}

	getWycieraczki(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/akcesoria/all-wycieraczki.php',{})
	}
}

