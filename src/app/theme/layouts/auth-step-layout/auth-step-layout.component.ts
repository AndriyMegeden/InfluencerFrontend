import { Component, Input, OnInit, input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthStep } from '@interfaces/auth.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-step-layout',
  templateUrl: './auth-step-layout.component.html',
  styleUrl: './auth-step-layout.component.scss'
})
export class AuthStepLayoutComponent implements OnInit{

  @Input() steps: boolean = false;
  @Input() $currentStep!: Observable<AuthStep>;

  public currentStep!: AuthStep;

  constructor() { }

  ngOnInit(): void {
    if(this.$currentStep){
      this.$currentStep.subscribe((step) => {
        this.currentStep = step;
      })
    }
  }
  
}
