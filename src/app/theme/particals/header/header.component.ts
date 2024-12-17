import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth-service/services/auth.service';
import { ImmitationService } from '@core/auth-service/services/immitation.service';
import { UserService } from '@core/auth-service/services/user.service';
import { FbCreateResponse } from '@interfaces/user.interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isActive: boolean = false;
  public isActiveMenu: boolean = false;
  public stream!: Subscription;
  public Burger: boolean = false;
  public submitted: boolean = false;
  public num: number = 50;
  isAuthenticated = false;
  citys = ['Paris', 'Milano', 'Krakow'];
  cetegory = ['Sport', 'clothes', 'vieoblog'];
  @Output() openModalEvent = new EventEmitter<string>();
  @ViewChild('iconButton') iconButton!: ElementRef;

  constructor(
    protected renderer: Renderer2,
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
   this.stream = this.auth.username$.subscribe((username) => {
      this.username = username; // Оновлюємо змінну username
    });
  }

  logoutt() {
    console.log(this.auth.token);
    this.isActiveMenu = !this.isActiveMenu;
    this.auth.logOut();
    this.router.navigate(['/main/home']);
  }

  // відкрити модалку попередження для видалення акаунту
  openModal(type: string) {
    this.openModalEvent.emit(type);
    this.isActiveMenu = !this.isActiveMenu;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
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

  ngOnDestroy() {
    this.stream.unsubscribe();
    console.log('unsubscribe in HEADER')
  }
}
