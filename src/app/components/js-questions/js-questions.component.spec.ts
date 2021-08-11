import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsQuestionsComponent } from './js-questions.component';

describe('JsQuestionsComponent', () => {
  let component: JsQuestionsComponent;
  let fixture: ComponentFixture<JsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
