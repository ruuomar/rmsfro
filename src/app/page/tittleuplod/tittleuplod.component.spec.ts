import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleuplodComponent } from './tittleuplod.component';

describe('TittleuplodComponent', () => {
  let component: TittleuplodComponent;
  let fixture: ComponentFixture<TittleuplodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TittleuplodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TittleuplodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
