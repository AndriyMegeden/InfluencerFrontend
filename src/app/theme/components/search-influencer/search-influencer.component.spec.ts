import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInfluencerComponent } from './search-influencer.component';

describe('SearchInfluencerComponent', () => {
  let component: SearchInfluencerComponent;
  let fixture: ComponentFixture<SearchInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInfluencerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
