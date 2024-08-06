import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDashbordComponent } from './std-dashbord.component';

describe('StdDashbordComponent', () => {
  let component: StdDashbordComponent;
  let fixture: ComponentFixture<StdDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdDashbordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
