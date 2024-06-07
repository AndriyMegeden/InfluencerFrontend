import { NgModule } from '@angular/core';
import { OnlyIntegerDirective } from './only-integer.directive';
import { PhoneMaskDirective } from './phone-mask.directive';
import { SingleDigitInputDirective } from './single-digit-Input.directive';

@NgModule({
  declarations: [
    OnlyIntegerDirective,
    PhoneMaskDirective,
    SingleDigitInputDirective
  ],
  exports: [
    OnlyIntegerDirective,
    PhoneMaskDirective,
    SingleDigitInputDirective
  ]
})
export class DirectivesModule { };
