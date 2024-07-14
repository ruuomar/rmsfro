import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalExaminerComponent } from './internal-examiner.component';

describe('InternalExaminerComponent', () => {
  let component: InternalExaminerComponent;
  let fixture: ComponentFixture<InternalExaminerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalExaminerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalExaminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
