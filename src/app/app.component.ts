import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  logIn(): void {
    sessionStorage.setItem('authenticated', 'true');
  }

  logOut(): void {
    sessionStorage.setItem('authenticated', 'false');
  }
}
