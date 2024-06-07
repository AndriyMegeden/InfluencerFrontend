import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInfluencerComponent } from './register-influencer.component';

describe('RegisterInfluencerComponent', () => {
  let component: RegisterInfluencerComponent;
  let fixture: ComponentFixture<RegisterInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterInfluencerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
