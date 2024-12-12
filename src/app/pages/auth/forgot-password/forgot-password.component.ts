import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth-service/services/auth.service';
import { ImmitationService } from '@core/auth-service/services/immitation.service';
import { UserService } from '@core/auth-service/services/user.service';
import { AuthComponent } from '@core/components/auth/auth.component';
import { AuthSettings, resetPasswordStep } from '@interfaces/auth.interface';
import { forgotSettingStepOne, forgotSettingStepThree, forgotSettingStepTwo } from '@static/auth.settings';
import { SharedThemeModule } from '@theme/shared.theme.module';
import { DirectivesModule } from 'src/app/directives/directives.module';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [SharedThemeModule, DirectivesModule],
  templateUrl: '../../../_core/components/auth/auth.component.html',
  styleUrls: ['../../../_core/components/auth/auth.component.scss'],
})
export class ForgotPasswordComponent  extends AuthComponent implements OnInit{

  public resetPasswordStep: resetPasswordStep = 'one';

  constructor(router: Router, userService: UserService, immitationService: ImmitationService, authService: AuthService){
    super(router, userService, immitationService, authService);
  }
  
  public override currentMode!: AuthSettings;

  ngOnInit(): void {
    this.currentMode = forgotSettingStepOne;
    this.createForm()
  }

  override getForm(): void {
    if(this.resetPasswordStep === 'one'){
      console.log('userRepeat -', this.form.value);
      this.currentMode = forgotSettingStepTwo;
      this.createForm()
      this.resetPasswordStep = 'two';
    }
    else if(this.resetPasswordStep === 'two'){
      console.log('userRepeat -', this.form.value);
      this.currentMode = forgotSettingStepThree;
      this.createForm()
      this.resetPasswordStep = 'three';
    }
    else{
      console.log('userRepeat -', this.form.value);
    }
  }
}
