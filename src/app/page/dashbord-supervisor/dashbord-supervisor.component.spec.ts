import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordSupervisorComponent } from './dashbord-supervisor.component';

describe('DashbordSupervisorComponent', () => {
  let component: DashbordSupervisorComponent;
  let fixture: ComponentFixture<DashbordSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashbordSupervisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
