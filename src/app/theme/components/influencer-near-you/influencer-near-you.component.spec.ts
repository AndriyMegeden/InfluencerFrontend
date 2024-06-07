import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerNearYouComponent } from './influencer-near-you.component';

describe('InfluencerNearYouComponent', () => {
  let component: InfluencerNearYouComponent;
  let fixture: ComponentFixture<InfluencerNearYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfluencerNearYouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfluencerNearYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
