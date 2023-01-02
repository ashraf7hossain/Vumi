import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFromSingleComponent } from './learn-from-single.component';

describe('LearnFromSingleComponent', () => {
  let component: LearnFromSingleComponent;
  let fixture: ComponentFixture<LearnFromSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnFromSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnFromSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
