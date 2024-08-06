import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationExaminerComponent } from './allocation-examiner.component';

describe('AllocationExaminerComponent', () => {
  let component: AllocationExaminerComponent;
  let fixture: ComponentFixture<AllocationExaminerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllocationExaminerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllocationExaminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
