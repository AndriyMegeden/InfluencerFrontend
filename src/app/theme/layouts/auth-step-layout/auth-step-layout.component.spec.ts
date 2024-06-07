import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthStepLayoutComponent } from './auth-step-layout.component';

describe('AuthStepLayoutComponent', () => {
  let component: AuthStepLayoutComponent;
  let fixture: ComponentFixture<AuthStepLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthStepLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthStepLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
