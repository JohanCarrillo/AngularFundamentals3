import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CountryListComponent } from './countryList/countryList.component';
import { CountryListService } from './countryList/countryList.service';
import { InterceptorService } from './interceptors/interceptor.service';

@NgModule({
  declarations: [AppComponent, CountryListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    CountryListService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
