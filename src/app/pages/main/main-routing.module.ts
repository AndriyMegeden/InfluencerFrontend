import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '@core/auth-service/guards/auth.guard';
import { LoginComponent } from '../auth/login/login.component';
import { ListingResolver } from '@theme/components/card-listing/listing.resolver';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'listing',
        canActivate: [AuthGuard],
        resolve: { cards: ListingResolver },
        component: ListingComponent,
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class MainRoutingModule {}
