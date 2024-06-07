import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PageType } from '@interfaces/auth.interface';
import { AuthGuard } from '@core/auth-service/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent,  data: { page: 'login' as PageType } },
      { path: 'register', component: RegisterComponent, data: { page: 'register' as PageType }  },
      { path: 'forgot-password', component:  ForgotPasswordComponent, data: { page: 'forgot-password' as PageType } },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard, 
  ],
})
export class AuthRoutingModule {}
