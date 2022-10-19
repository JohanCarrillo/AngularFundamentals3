import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: 'countries', canActivate: [AuthGuard], component: CountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
