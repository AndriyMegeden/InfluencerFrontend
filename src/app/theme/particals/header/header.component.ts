import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImmitationService } from '@core/auth-service/services/immitation.service';
import { UserService } from '@core/auth-service/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isActive: boolean = false;
  public submitted: boolean = false;
  public num: number = 50;
  citys = ['Paris', 'Milano', 'Krakow'];
  cetegory = ['Sport', 'clothes', 'vieoblog'];

  @ViewChild('iconButton') iconButton!: ElementRef;

  constructor(protected immitationService: ImmitationService) {}

  toggleFilter() {
    this.isActive = !this.isActive;
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

  ngOnInit() {
    // Підпишіться на зміни значень submitted
    // this.userService.submitted$.subscribe(submitted => {
    //   this.submitted = submitted;
    // });
  }

  logoutt() {
    this.immitationService.logout();
  }
}
