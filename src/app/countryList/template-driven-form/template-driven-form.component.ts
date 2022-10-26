import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import SearchModel from 'src/app/types/searchCountry.type';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent {
  @Output() emitSearchData: EventEmitter<SearchModel> =
    new EventEmitter<SearchModel>();

  model: SearchModel = {
    countryName: '',
    capitalCity: '',
  };

  emitSearch() {
    this.emitSearchData.emit(this.model);
  }
}
