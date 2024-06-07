import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedThemeModule } from '@theme/shared.theme.module';
import { DirectivesModule } from 'src/app/directives/directives.module';


@Component({
  selector: 'app-register-brand',
  standalone: true,
  imports: [SharedThemeModule, DirectivesModule],
  templateUrl: './register-brand.component.html',
  styleUrl: './register-brand.component.scss',
})
export class RegisterBrandComponent {

  public form: FormGroup = new FormGroup({
    businessName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    businessWebsite: new FormControl('', [Validators.minLength(3)]),
    businessAddress: new FormControl('', [Validators.required, Validators.minLength(3)]),
    gstNumber: new FormControl('', [Validators.minLength(3)]),
  });

  getForm(){
    console.log('getUserData - Role: brand', this.form.value);
  }
}
