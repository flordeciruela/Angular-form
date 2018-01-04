import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import data from '../app.data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder;
  arr = data;
  play = false;

  private static CustomValidator(control: AbstractControl) {
    return control.value ? null : { newValidator: false};
  }

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  onSubmit() {
    this.arr.push(this.form.get('newString').value);
    this.form.reset();
    this.play = true;
  }

  ngOnInit() {
    this.form = this.fb.group({
      newString: ['',  [
        Validators.required,
        FormComponent.CustomValidator
      ]]
    })
  }

}
