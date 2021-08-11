import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxQuestionsComponent } from './ngrx-questions.component';

describe('NgrxQuestionsComponent', () => {
  let component: NgrxQuestionsComponent;
  let fixture: ComponentFixture<NgrxQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
