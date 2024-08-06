import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbodExaminerComponent } from './dashbod-examiner.component';

describe('DashbodExaminerComponent', () => {
  let component: DashbodExaminerComponent;
  let fixture: ComponentFixture<DashbodExaminerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashbodExaminerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbodExaminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
