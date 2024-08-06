import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllocationExaminerComponent } from './list-allocation-examiner.component';

describe('ListAllocationExaminerComponent', () => {
  let component: ListAllocationExaminerComponent;
  let fixture: ComponentFixture<ListAllocationExaminerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllocationExaminerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllocationExaminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
