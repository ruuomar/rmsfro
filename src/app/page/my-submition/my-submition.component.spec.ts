import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubmitionComponent } from './my-submition.component';

describe('MySubmitionComponent', () => {
  let component: MySubmitionComponent;
  let fixture: ComponentFixture<MySubmitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySubmitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySubmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
