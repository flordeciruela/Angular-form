import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import data from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cadaver Exquisito';
  form: FormGroup;
  fb: FormBuilder;
  arr = data;

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  addString(newString: string) {
    if (newString) {
      this.arr.push(newString);
    }
  }

  ngOnInit(){
    this.form = this.fb.group({
      name: ['']
    })
  }

}
