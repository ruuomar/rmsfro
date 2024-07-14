import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlySubmitionComponent } from './newly-submition.component';

describe('NewlySubmitionComponent', () => {
  let component: NewlySubmitionComponent;
  let fixture: ComponentFixture<NewlySubmitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewlySubmitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewlySubmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
