import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImmitationService } from '@core/auth-service/services/immitation.service';
import { UserService } from '@core/auth-service/services/user.service';
import { AuthComponent } from '@core/components/auth/auth.component';
import { registerSetting } from '@static/auth.settings';
import { SharedThemeModule } from '@theme/shared.theme.module';
import { DirectivesModule } from 'src/app/directives/directives.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedThemeModule, DirectivesModule],
  templateUrl: '../../../_core/components/auth/auth.component.html',
  styleUrls: ['../../../_core/components/auth/auth.component.scss'],
})
export class RegisterComponent extends AuthComponent implements OnInit{
  

  constructor(router: Router, userService: UserService, immitationService: ImmitationService){
    super(router, userService, immitationService);
  }

  ngOnInit(): void {
    this.currentMode = registerSetting;
    this.createForm()
  }

  override socialLogin(id: string): void {
    console.log('userSocialLogin -', id);
  }

  override getForm(): void {
    console.log('userRegister -', this.form.value);
    this.router.navigateByUrl(`auth-step/register-${this.form.value.userRoles}`)
  }
  
}