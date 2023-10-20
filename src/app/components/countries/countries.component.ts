import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
	selector: 'app-countries',
	templateUrl: './countries.component.html',
	styles: [
	]
})
export class CountriesComponent implements OnInit {

	_countries: Country[] = [];

	constructor(private _httpClient: HttpClient) { }

	ngOnInit(): void {

		this._httpClient.get<Country[]>('https://restcountries.com/v3.1/all').subscribe((response: Country[]) => this._countries = response);
	}

	dropped(event: CdkDragDrop<any>) {

		moveItemInArray(this._countries, event.previousIndex, event.currentIndex);
	}
}
