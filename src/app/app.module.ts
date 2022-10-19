import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountryService } from './country/country-service.service';
import { InterceptorService } from './interceptors/interceptor.service';

@NgModule({
  declarations: [AppComponent, CountryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    CountryService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
