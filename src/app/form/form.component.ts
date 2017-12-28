import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  onSubmit() {
    this.arr.push(this.form.get('newString').value);
    this.form.reset();
  }

  ngOnInit() {
    this.form = this.fb.group({
      newString: ['', [Validators.required]]
    })
  }

}
