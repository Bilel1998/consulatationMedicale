import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesQuestionsComponent } from './les-questions.component';

describe('LesQuestionsComponent', () => {
  let component: LesQuestionsComponent;
  let fixture: ComponentFixture<LesQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
