import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInfluencerComponent } from './top-influencer.component';

describe('TopInfluencerComponent', () => {
  let component: TopInfluencerComponent;
  let fixture: ComponentFixture<TopInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopInfluencerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
