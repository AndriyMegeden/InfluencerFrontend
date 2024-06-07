import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthStep } from '@interfaces/auth.interface';
import { checkBoxesStepOne, checkBoxesStepTwo } from '@static/auth.settings';
import { SharedThemeModule } from '@theme/shared.theme.module';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-register-influencer',
  standalone: true,
  imports: [SharedThemeModule],
  templateUrl: './register-influencer.component.html',
  styleUrl: './register-influencer.component.scss',
})
export class RegisterInfluencerComponent implements OnInit {
  
  public currentStep: AuthStep = 'one';
  public $currentStep: BehaviorSubject<AuthStep> = new BehaviorSubject<AuthStep>('one');
  public checkBoxes: Array<{ id: string; text: string }> = [];
  public checkBoxesStepOne: Array<{ id: string; text: string }> = checkBoxesStepOne;
  public checkBoxesStepTwo: Array<{ id: string; text: string }> = checkBoxesStepTwo;
  public formPart?: FormGroup;
  public formCompleted?: FormGroup;
  public formSocialInputs?: FormGroup;

  ngOnInit() {
    this.checkBoxes = this.checkBoxesStepOne;
    this.createFormCompleted()
    this.createFormPart('one', 3)
  }

  createFormPart(currentStep: AuthStep, minLength: number){
    delete this.formPart;
    this.formPart = new FormGroup({
      [currentStep]: new FormControl([], [Validators.required, Validators.minLength(minLength)]),
    })
    this.formPart.get(currentStep)?.setValue(this.formCompleted?.get(currentStep)?.value)
  }

  createFormCompleted(){
    this.formCompleted = new FormGroup({
      one: new FormControl([], [Validators.required]),
      two: new FormControl([], [Validators.required]),
      twoLinks:  new FormControl({}, [Validators.required]),
    })
  }

  createFormSocialInputs(){
    const formControlsConfig: Record<string, any> = {};
    this.formSocialInputs = new FormGroup(formControlsConfig);
    Object.keys(this.formCompleted?.get('twoLinks')?.value).forEach(controlName => {
      this.formSocialInputs?.setControl(controlName, new FormControl(this.formCompleted?.get('twoLinks')?.value[controlName], [Validators.required, Validators.minLength(3)]))
    })
  }

  toggleCheckbox(id: string, currentStep: AuthStep) {
    if(this.formPart){
      const stepOneControl = this.formPart.get(currentStep);
      if(stepOneControl){
        const currentValue = stepOneControl.value as string[];
        if (currentValue.includes(id)) {
          if(this.currentStep === 'two' && this.formSocialInputs){
            this.formSocialInputs.removeControl(`${id}Link`)
          }
          const index = currentValue.indexOf(id);
          currentValue.splice(index, 1);
        } else {
          if(this.currentStep === 'two' && this.formSocialInputs){
            this.formSocialInputs.setControl(`${id}Link`, new FormControl('', [Validators.required, Validators.minLength(3)]))
          }
          currentValue.push(id);
        }
        stepOneControl.setValue(currentValue);
      }
    }
  }

  prev(){
    this.formCompleted?.get(`${this.currentStep}Links`)?.setValue(this.formSocialInputs?.value);
    this.$currentStep.next('one')
    this.currentStep = 'one';
    this.checkBoxes = this.checkBoxesStepOne;
    delete this.formSocialInputs;
    this.createFormPart(this.currentStep, 3);
  }

  next() {
    if(this.currentStep === 'two'){
      this.formCompleted?.get(this.currentStep)?.setValue(this.formPart?.value[this.currentStep]);
      this.formCompleted?.get(`${this.currentStep}Links`)?.setValue(this.formSocialInputs?.value);
      this.getForm(this.formCompleted?.value)
    }
    else{
      this.formCompleted?.get(this.currentStep)?.setValue(this.formPart?.value[this.currentStep]);
      this.currentStep = 'two';
      this.checkBoxes = this.checkBoxesStepTwo;
      this.$currentStep.next('two')
      this.createFormPart(this.currentStep, 1);
      this.createFormSocialInputs()
    }
  }

  getForm(value: any){
    console.log('getUserData - Role: influencer', value);
  }
}
