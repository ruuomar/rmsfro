import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodResultComponent } from './uplod-result.component';

describe('UplodResultComponent', () => {
  let component: UplodResultComponent;
  let fixture: ComponentFixture<UplodResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UplodResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UplodResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
