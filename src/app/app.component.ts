import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  public sessionStatus: boolean = false;
  constructor() {}

  logIn(): void {
    sessionStorage.setItem('authenticated', 'true');
    this.sessionStatus = true;
  }

  logOut(): void {
    sessionStorage.setItem('authenticated', 'false');
    this.sessionStatus = false;
  }
}
