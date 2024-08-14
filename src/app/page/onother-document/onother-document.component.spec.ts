import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnotherDocumentComponent } from './onother-document.component';

describe('OnotherDocumentComponent', () => {
  let component: OnotherDocumentComponent;
  let fixture: ComponentFixture<OnotherDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnotherDocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnotherDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
