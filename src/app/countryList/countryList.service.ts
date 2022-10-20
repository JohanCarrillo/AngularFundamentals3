import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class CountryListService {
  private countryAPIUrl: string = 'https://restcountries.com/v2/all';
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get<unknown>(this.countryAPIUrl);
  }
}
