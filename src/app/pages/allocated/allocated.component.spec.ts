import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedComponent } from './allocated.component';


describe('AllocatedComponent', () => {
  let component: AllocatedComponent;
  let fixture: ComponentFixture<AllocatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllocatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
