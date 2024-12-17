import { Component, EventEmitter, Output } from '@angular/core';
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
import { AuthService } from '@core/auth-service/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [SharedThemeModule, DirectivesModule],
})
export class AuthComponent {
  @Output() emailChanged = new EventEmitter<string>();
  public submitted = false;
  // для створення користувача
  public remember: boolean = false;
  public page: PageType = 'login';
  public currentMode!: AuthSettings;
  public form!: FormGroup;
  public userRoles: Array<{ id: UserRoles; text: string; icon?: string }> =
    userRoles;
  public socials: Array<{ id: SocialType; text: string }> = socials;
  public resetKeys: Array<String> | any = resetKeys;

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
    protected immitationService: ImmitationService,
    protected auth: AuthService
  ) {}

  createForm() {
    const formControlsConfig: Record<string, any> = {};
    this.currentMode.inputs.forEach((input) => {
      formControlsConfig[input.inputId] = new FormControl(
        input.value,
        input.validators
      );
    });

    // Нові поля для телефону і username
    formControlsConfig['phoneNumber'] = new FormControl(''); // Додаємо номер телефону
    formControlsConfig['username'] = new FormControl(''); // Додаємо username

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
  interval: any;
  startTimer() {
    if (this.interval) {
      clearInterval(this.interval); // Якщо таймер вже працює, зупиняємо його
    }

    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval); // Зупиняємо таймер, коли час досягає 0
        this.timeLeft = 60; // Скидаємо значення таймера на 60
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

  // помилки під час реєстрації
  handleError(error: any): string {
    switch (error.error?.error?.message) {
      case 'EMAIL_EXISTS':
        return 'This email is already in use.';
      case 'OPERATION_NOT_ALLOWED':
        return 'Registration is disabled.';
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        return 'Too many attempts. Please try again later.';
      default:
        return 'An unknown error occurred.';
    }
  }

  submitForm(buttonId: string) {
    const selectedRole = this.form.get('userRoles')?.value;
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      username: this.form.value.username,
      phoneNumber: this.form.value.phoneNumber,
    };

    this.getForm();
    if (buttonId === 'signUp') {
      // Реєстрація користувача через Firebase Authentication
      // // відправляємо наш username в сервіс
      const userUsername = this.form.get('username')?.value;
      if (userUsername) {
        this.auth.setUsername(userUsername);
      }
      this.auth.register(user).subscribe(
        (authResponse) => {
          console.log(
            'User registered successfully in Firebase Auth:',
            authResponse
          );
          this.auth.create(user).subscribe(
            (dbResponse) => {
              console.log('User added to Firebase DB:', dbResponse);
            },
            (dbError) => {
              console.error('Error adding user to Firebase DB:', dbError);
            }
          );
        },
        (error) => {
          console.error('Error during registration:', this.handleError(error));
        }
      );
    }
    if (buttonId === 'signIn') {
      if (this.form.invalid) {
        return;
      }

      this.auth.login(user).subscribe((response: any) => {
        const token = localStorage.getItem('fb-token-exp');
        // потрібно шоб продовжити токен на 30 днів 
        if ((this.remember && token)) {
          const tokenExpiryDate = new Date(token);
          tokenExpiryDate.setDate(tokenExpiryDate.getDate() + 30);
          const newFormattedDate = tokenExpiryDate.toString();
          localStorage.setItem('fb-token-exp', newFormattedDate);
          console.log(newFormattedDate);
        }
        console.log(response);
        const userEmail = response.email;
        this.auth.fetchUsername(userEmail);
        // this.auth.fetchId(userId)
        this.router.navigate(['/main/listing']);
      });
    }

    this.startTimer();
  }
// тут функція яка по кліку міняє remember на true або false 
  rememberMe() {
    this.remember = !this.remember;
    console.log(this.remember);
  }

  socialLogin(id: string) {}
}
