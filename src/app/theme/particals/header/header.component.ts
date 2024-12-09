import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/auth-service/services/auth.service';
import { ImmitationService } from '@core/auth-service/services/immitation.service';
import { UserService } from '@core/auth-service/services/user.service';
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
    protected immitationService: ImmitationService,
    protected auth: AuthService
  ) {}

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


  email: string | null = null;

  ngOnInit() {
    // Підпишіться на зміни значень email і лишається тільки вивести в шаблон
    this.auth.currentEmail.subscribe((email) => {
      this.email = email;
    });
  }

  logoutt() {
    console.log(this.auth.token);
    this.isActiveMenu = !this.isActiveMenu;
    this.auth.logOut();
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
