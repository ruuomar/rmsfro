import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserchCompletedComponent } from './reserch-completed.component';

describe('ReserchCompletedComponent', () => {
  let component: ReserchCompletedComponent;
  let fixture: ComponentFixture<ReserchCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReserchCompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReserchCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
