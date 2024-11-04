import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AuthSettings,
  PageType,
  SectionType,
} from '@interfaces/auth.interface';
import { SocialType, User, UserRoles } from '@interfaces/user.interface';
import {
  forgotSettingStepOne,
  forgotSettingStepThree,
  forgotSettingStepTwo,
  resetKeys,
  socials,
  userRoles,
} from '@static/auth.settings';
import { SharedThemeModule } from '@theme/shared.theme.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { Location } from '@angular/common';
import { UserService } from '@core/auth-service/services/user.service';
import { ImmitationService } from '@core/auth-service/services/immitation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [SharedThemeModule, DirectivesModule],
})
export class AuthComponent {
  public submitted = false;
  // для створення користувача
  public page: PageType = 'login';
  public currentMode!: AuthSettings;
  public form!: FormGroup;
  public userRoles: Array<{ id: UserRoles; text: string; icon?: string }> =
    userRoles;
  public socials: Array<{ id: SocialType; text: string }> = socials;
  public resetKeys: Array<String> | any = resetKeys;

  
  register() {
    console.log('go');
    this.userService.register(this.form.value).subscribe(
      (result) => {
        console.log('User create', result);
      },
      (error) => {
        console.error('Error create user:', error);
      }
    );
  }

  login() {
    if (this.form.invalid) {
      return;
    }
    // коли іде запрос на сервер кнопка заблокована
    this.submitted = true;
    console.log(this.form);

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.userService.login(user).subscribe(
      () => {
        this.form.reset();
        this.router.navigate(['/main/listing']);
        // коли запрос пройшов кнопка розблоковується
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }

  constructor(
    protected router: Router,
    protected userService: UserService,
    protected immitationService: ImmitationService
  ) {}


  createForm() {
    const formControlsConfig: Record<string, any> = {};
    this.currentMode.inputs.forEach((input) => {
      formControlsConfig[input.inputId] = new FormControl(
        input.value,
        input.validators
      );
    });

    if (this.currentMode.sections.includes('remember')) {
      formControlsConfig['remember'] = new FormControl(false);
    }

    if (this.currentMode.sections.includes('userRoles')) {
      formControlsConfig['userRoles'] = new FormControl('brand');
    }

    if (this.currentMode.sections.includes('resetForm')) {
      this.resetKeys.forEach((key: string) => {
        formControlsConfig[key] = new FormControl('', [Validators.required]);
      });
    }

    

    this.form = new FormGroup(formControlsConfig);
  }

  timeLeft: number = 60;

  startTimer() {
    const interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  checkSection(id: SectionType) {
    if (this.currentMode.sections.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
  goBack() {
    if (this.currentMode === forgotSettingStepThree) {
      this.currentMode = forgotSettingStepTwo;
    } else if (this.currentMode === forgotSettingStepTwo) {
      this.currentMode = forgotSettingStepOne;
    } else if (this.currentMode === forgotSettingStepOne) {
      this.router.navigateByUrl('/auth/login');
    }
  }

  getForm() {}

  submitForm(buttonId: string) {
    
    const selectedRole = this.form.get('userRoles')?.value;

    this.getForm();
    if (buttonId === 'signUp') {
      // Логіка реєстрації (можливо, виклик сервісу)
      this.immitationService.login();
      if (selectedRole === 'brand') {
        this.router.navigate(['/auth-step/register-brand']); // Перехід на сторінку для бренду
      } else if (selectedRole === 'influencer') {
        this.router.navigate(['/auth-step/register-influencer']); // Перехід на сторінку для інфлюенсера
      }
    }
    if (buttonId === 'signIn') {
      this.immitationService.login();
      console.log(this.immitationService.login);
      this.router.navigate(['/main/listing']);
      // this.userService.setSubmitted(true);
    }
    this.startTimer();
  }



  socialLogin(id: string) {}
}
