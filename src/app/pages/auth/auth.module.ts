import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedThemeModule } from '@theme/shared.theme.module';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedThemeModule
  ]
})
export class AuthModule { }
