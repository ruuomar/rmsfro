import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserchDocumentComponent } from './reserch-document.component';

describe('ReserchDocumentComponent', () => {
  let component: ReserchDocumentComponent;
  let fixture: ComponentFixture<ReserchDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReserchDocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReserchDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
