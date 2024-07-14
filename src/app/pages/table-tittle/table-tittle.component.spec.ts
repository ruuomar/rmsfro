import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTittleComponent } from './table-tittle.component';

describe('TableTittleComponent', () => {
  let component: TableTittleComponent;
  let fixture: ComponentFixture<TableTittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableTittleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
