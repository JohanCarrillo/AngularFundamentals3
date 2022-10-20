import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CountryListService } from './countryList.service';

@Component({
  selector: 'app-countryList',
  templateUrl: './countryList.component.html',
  styleUrls: ['./countryList.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CountryListComponent implements OnInit {
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

  /* queryParams() {
    this.router.navigate(['countries'], {
      queryParams: { city: 'medellin', currency: 'COP' },
    });
  } */
}
