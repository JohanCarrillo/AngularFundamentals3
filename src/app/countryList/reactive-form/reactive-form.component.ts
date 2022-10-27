import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import SearchModel from 'src/app/types/searchCountry.type';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  @Output() emitSearchData: EventEmitter<SearchModel> =
    new EventEmitter<SearchModel>();

  form = new FormGroup({
    countryName: new FormControl(),
    capitalCity: new FormControl(),
  });

  emitSearch() {
    this.emitSearchData.emit({
      countryName: this.form.value.countryName,
      capitalCity: this.form.value.capitalCity,
    });
  }
}
