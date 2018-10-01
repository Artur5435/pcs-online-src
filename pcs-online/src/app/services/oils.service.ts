import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oil } from '../models/oil';
import { Observable } from 'rxjs'
import {mergeMap , map,  filter, catchError, } from 'rxjs/operators'
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class OilsService {

	constructor(private http: HttpClient) { }
	
	getOilsEko(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/oleje/all-eko.php',{})
	}

	getOilsPremium(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/oleje/all-prem.php',{})
	}

	getOilsMid(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/oleje/all-mid.php',{})
	}

	getOilsPrzek(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/oleje/all-przek.php',{})
	}

	getOilsSport(): Observable<Item[]> {
		return this.http.post<Item[]>('assets/backend/oleje/all-sport.php',{})
	}
}
