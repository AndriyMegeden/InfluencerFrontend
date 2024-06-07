import { NgModule } from '@angular/core';
import { SharedThemeModule } from '@theme/shared.theme.module';
import { AuthStepRoutingModule } from './auth-step-routing.module';
import { AuthStepComponent } from './auth-step.component';

@NgModule({
  declarations: [
    AuthStepComponent
  ],
  imports: [
    AuthStepRoutingModule,
    SharedThemeModule
  ]
})
export class AuthStepModule { }
