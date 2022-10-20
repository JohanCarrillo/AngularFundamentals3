import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './countryList/countryList.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'countries',
    canActivate: [AuthGuard],
    component: CountryListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
