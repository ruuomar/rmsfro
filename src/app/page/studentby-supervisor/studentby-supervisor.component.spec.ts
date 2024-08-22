import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbySupervisorComponent } from './studentby-supervisor.component';

describe('StudentbySupervisorComponent', () => {
  let component: StudentbySupervisorComponent;
  let fixture: ComponentFixture<StudentbySupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentbySupervisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentbySupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
