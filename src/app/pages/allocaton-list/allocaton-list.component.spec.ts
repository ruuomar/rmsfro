import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatonListComponent } from './allocaton-list.component';

describe('AllocatonListComponent', () => {
  let component: AllocatonListComponent;
  let fixture: ComponentFixture<AllocatonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllocatonListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllocatonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
