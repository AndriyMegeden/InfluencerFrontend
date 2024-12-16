import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth-service/services/auth.service';
import { ImmitationService } from '@core/auth-service/services/immitation.service';
import { UserService } from '@core/auth-service/services/user.service';
import { FbCreateResponse } from '@interfaces/user.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isActive: boolean = false;
  public isActiveMenu: boolean = false;
  public Burger: boolean = false;
  public submitted: boolean = false;
  public num: number = 50;
  isAuthenticated = false;
  citys = ['Paris', 'Milano', 'Krakow'];
  cetegory = ['Sport', 'clothes', 'vieoblog'];

  @ViewChild('iconButton') iconButton!: ElementRef;

  constructor(
    protected router: Router,
    protected immitationService: ImmitationService,
    protected auth: AuthService
  ) {}

  id: string | undefined; // зберігаємо id

  toggleFilter() {
    this.isActive = !this.isActive;
    if (this.isActiveMenu === true || this.Burger === true) {
      this.isActiveMenu = false;
      this.Burger === false;
    }
    const imagePath = this.isActive
      ? '/assets/svg/close-filter.svg'
      : '/assets/svg/search.svg';
    this.iconButton.nativeElement.setAttribute('src', imagePath);
  }

  reactiveForm: FormGroup = new FormGroup({
    city: new FormControl('', Validators.required),
    cetegories: new FormControl('', Validators.required),
    Keyword: new FormControl('', Validators.required),
  });

  submitForm() {
    console.log(this.reactiveForm);
  }

  username: string | null = null;

  ngOnInit() {
    // Підпишіться на зміни значень Username і лишається тільки вивести в шаблон
    this.auth.username$.subscribe((username) => {
      this.username = username; // Оновлюємо змінну username
    });
  }

  logoutt() {
    console.log(this.auth.token);
    this.isActiveMenu = !this.isActiveMenu;
    this.auth.logOut();
    this.router.navigate(['/main/home']);
  }

  fetchIdFromDatabase() {
    this.auth.getUserId().subscribe(
      (response) => {
        // Перевіряємо, чи є дані
        if (response) {
          // Отримуємо перший ключ як ID
          const keys = Object.keys(response);
          if (keys.length > 0) {
            this.id = keys[0]; // Перший ключ - це ваш ID
            console.log('Отримано ID:', this.id);
          } else {
            console.error('Дані не знайдені в базі!');
          }
        } else {
          console.error('Відповідь порожня!');
        }
      },
      (error) => {
        console.error('Помилка отримання ID:', error);
      }
    );
  }
  

  remove() {
    // Перевіряємо, чи є ID перед видаленням
    if (this.id) {
      this.auth.deleteAccount(this.id).subscribe(
        () => {
          console.log('Користувач успішно видалений');
        },
        (error) => {
          console.error('Помилка видалення:', error);
        }
      );
    } else {
      console.error('ID не визначено!');
    }
  }



 
  logoutMenuBurger() {
    if (this.isActive === true || this.Burger === true) {
      this.isActive = false;
      this.Burger === false;
    }
    this.isActiveMenu = !this.isActiveMenu;
    const imagePath = this.isActive
      ? 'arrow-logout-menu.svg'
      : '/assets/svg/search.svg';
    this.iconButton.nativeElement.setAttribute('src', imagePath);
  }

  BurgerMenu() {
    if (this.isActive === true || this.isActiveMenu === true) {
      this.isActive = false;
      this.isActiveMenu === false;
    }
    this.Burger = !this.Burger;
  }
}
