import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DissertationResultComponent } from './dissertation-result.component';

describe('DissertationResultComponent', () => {
  let component: DissertationResultComponent;
  let fixture: ComponentFixture<DissertationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DissertationResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DissertationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
