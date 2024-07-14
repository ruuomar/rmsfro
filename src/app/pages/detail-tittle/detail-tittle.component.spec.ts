import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTittleComponent } from './detail-tittle.component';

describe('DetailTittleComponent', () => {
  let component: DetailTittleComponent;
  let fixture: ComponentFixture<DetailTittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailTittleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
