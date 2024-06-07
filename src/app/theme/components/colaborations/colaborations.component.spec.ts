import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborationsComponent } from './colaborations.component';

describe('ColaborationsComponent', () => {
  let component: ColaborationsComponent;
  let fixture: ComponentFixture<ColaborationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaborationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaborationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
