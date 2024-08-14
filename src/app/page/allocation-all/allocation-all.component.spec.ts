import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationAllComponent } from './allocation-all.component';

describe('AllocationAllComponent', () => {
  let component: AllocationAllComponent;
  let fixture: ComponentFixture<AllocationAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllocationAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllocationAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
