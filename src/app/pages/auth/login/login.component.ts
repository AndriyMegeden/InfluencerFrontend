import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth-service/services/auth.service';
import { ImmitationService } from '@core/auth-service/services/immitation.service';
import { UserService } from '@core/auth-service/services/user.service';
import { AuthComponent } from '@core/components/auth/auth.component';
import { loginSetting } from '@static/auth.settings';
import { SharedThemeModule } from '@theme/shared.theme.module';
import { DirectivesModule } from 'src/app/directives/directives.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedThemeModule, DirectivesModule],
  templateUrl: '../../../_core/components/auth/auth.component.html',
  styleUrls: ['../../../_core/components/auth/auth.component.scss'],
})
export class LoginComponent extends AuthComponent implements OnInit{
  
  constructor(router: Router, userService: UserService, immitationService: ImmitationService, authService: AuthService){
    super(router, userService, immitationService, authService);
  }

  ngOnInit(): void {
    this.currentMode = loginSetting;
    this.createForm()
  }

  override socialLogin(id: string): void {
    console.log('userSocialLogin -', id);
  }

  override getForm(): void {
    console.log('userLogin -', this.form.value);
  }
  
}
