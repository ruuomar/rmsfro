import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchComplitedComponent } from './research-complited.component';

describe('ResearchComplitedComponent', () => {
  let component: ResearchComplitedComponent;
  let fixture: ComponentFixture<ResearchComplitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchComplitedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchComplitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
