import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from './country-service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries: any;
  constructor(public router: Router, private countryService: CountryService) {}

  ngOnInit(): void {}

  showAllCountries() {
    return this.countryService
      .getAllCountries()
      .subscribe((data) => (this.countries = data));
  }

  queryParams() {
    this.router.navigate(['countries'], {
      queryParams: { city: 'medellin', currency: 'COP' },
    });
  }
}
