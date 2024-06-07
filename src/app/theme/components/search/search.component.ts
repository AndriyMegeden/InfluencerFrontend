import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',

  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  genders = ['Male', 'Female', 'Other'];
  citys = ['Paris', 'Milano', 'Krakow'];
  follower = [100, 700, 1000];
  cetegory = ['Sport', 'clothes', 'vieoblog'];
  percents = ['4%', '8%', '10%'];

  reactiveForm: FormGroup = new FormGroup({
    gender: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    followers: new FormControl('', Validators.required),
    cetegories: new FormControl('', Validators.required),
    percent: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  submitForm() {
    console.log(this.reactiveForm);
  }
}
