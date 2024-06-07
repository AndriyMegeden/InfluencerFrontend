import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthStepComponent } from './auth-step.component';
import { RegisterBrandComponent } from './register-brand/register-brand.component';
import { RegisterInfluencerComponent } from './register-influencer/register-influencer.component';

const routes: Routes = [
  {
    path: '',
    component: AuthStepComponent,
    children: [
      { path: 'register-brand', component: RegisterBrandComponent },
      { path: 'register-influencer', component: RegisterInfluencerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthStepRoutingModule {}
