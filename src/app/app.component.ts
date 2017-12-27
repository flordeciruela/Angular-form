import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import data from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder;
  arr = data;
  gameOver = false;
  private readonly timeForDeadline = 1*60*1000;
  dateDeadLine = new Date((new Date()).valueOf() + this.timeForDeadline)
  dateString = new Intl.DateTimeFormat().format(this.dateDeadLine) + ' a las '
               + this.dateDeadLine.toLocaleTimeString();

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

    setTimeout(() => {
      this.gameOver = true;
    }, this.timeForDeadline);
  }

}
