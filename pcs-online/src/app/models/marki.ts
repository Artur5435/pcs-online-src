import { Item } from "./item";

export interface Marki {
	Marki: string[]
}

export interface Roczniki {
	Roczniki: string[]
}

export interface Modele {
	Modele: string[]
}

export interface Silniki {
	Silniki: string[]
}

export interface Car {
	Marka: string,
	Rocznik: string,
	Model: string,
	Silnik: string
}

export interface Result {
	Filtry_oleju: string[],
	Filtry_paliwa: string[],
	Filtry_powietrza: string[],
	Filtry_kabiny: string[],
	Oleje_zgodne_szlach: string[],
	Oleje_Rekomendowane: string[],
	Olej_polecana_szlach: string[]
}

export interface ResultItems {
	Filtry_oleju: Item[],
	Filtry_paliwa: Item[],
	Filtry_powietrza: Item[],
	Filtry_kabiny: Item[],
	Oleje_polecane: Item[],
	Oleje_eko: Item[],
	Oleje_mid: Item[],
	Oleje_prem: Item[],
	Oleje_sport: Item[]
}