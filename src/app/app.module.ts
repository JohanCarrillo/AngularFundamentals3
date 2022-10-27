import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryListComponent } from './countryList/countryList.component';
import { CountryListService } from './countryList/countryList.service';
import { InterceptorService } from './interceptors/interceptor.service';
import { TemplateDrivenFormComponent } from './countryList/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './countryList/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CountryListService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
