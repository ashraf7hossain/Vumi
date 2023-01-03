import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideRectComponent } from './slide-rect.component';

describe('SlideRectComponent', () => {
  let component: SlideRectComponent;
  let fixture: ComponentFixture<SlideRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideRectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
