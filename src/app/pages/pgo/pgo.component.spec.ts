import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGOComponent } from './pgo.component';

describe('PGOComponent', () => {
  let component: PGOComponent;
  let fixture: ComponentFixture<PGOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PGOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
