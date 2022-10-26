import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { CountryListService } from './countryList.service';
import SearchModel from '../types/searchCountry.type';

@Component({
  selector: 'app-countryList',
  templateUrl: './countryList.component.html',
  styleUrls: ['./countryList.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CountryListComponent implements OnInit {
  searchData: SearchModel = { countryName: '', capitalCity: '' };
  countries: any;
  constructor(
    public router: Router,
    private countryListService: CountryListService
  ) {}

  ngOnInit(): void {}

  showAllCountries() {
    return this.countryListService
      .getAllCountries()
      .subscribe((data) => (this.countries = data));
  }

  search(data: SearchModel) {
    this.searchData.countryName = data.countryName;
    this.searchData.capitalCity = data.capitalCity;
    console.log(this.searchData);
  }

  /* queryParams() {
    this.router.navigate(['countries'], {
      queryParams: { city: 'medellin', currency: 'COP' },
    });
  } */
}
