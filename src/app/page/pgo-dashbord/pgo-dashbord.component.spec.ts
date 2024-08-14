import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgoDashbordComponent } from './pgo-dashbord.component';

describe('PgoDashbordComponent', () => {
  let component: PgoDashbordComponent;
  let fixture: ComponentFixture<PgoDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgoDashbordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgoDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
