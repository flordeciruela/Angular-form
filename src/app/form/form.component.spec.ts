import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let originalTimeout;

  beforeEach(async(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as texts form array`, async(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    let data = ['a', 'b', 'c'];
    component.arr = data;
    expect(component.arr).toEqual(['a', 'b', 'c']);
  }));
  it('should delete form', () => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.play = true;
    expect(component.form).toBeFalsy();
  });
});
