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
  gameOver = false;

  private static CustomValidator(control: AbstractControl) {
    return control.value ? null : { newValidator: false};
  }

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  onSubmit() {
    this.arr.push(this.form.get('newString').value);
    //this.form.reset();
    this.form.get('newString').value = '';
    console.log(this.arr.length);
    if(this.arr.length > 11) {
      this.gameOver = true;
    }
    console.log(this.gameOver);
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
