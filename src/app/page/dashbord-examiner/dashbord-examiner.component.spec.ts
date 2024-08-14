import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordExaminerComponent } from './dashbord-examiner.component';

describe('DashbordExaminerComponent', () => {
  let component: DashbordExaminerComponent;
  let fixture: ComponentFixture<DashbordExaminerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashbordExaminerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordExaminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
