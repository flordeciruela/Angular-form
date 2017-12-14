import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import data from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bienvenido al famoso juego literario del cadáver exquisito';
  form: FormGroup;
  fb: FormBuilder;
  arr = data;
  gameOver = false;
  timeForDeadline = 1*60*1000;
  dateDeadLine = new Date((new Date()).valueOf() + this.timeForDeadline)
  dateString = new Intl.DateTimeFormat().format(this.dateDeadLine) + ' a las ' + this.dateDeadLine.toLocaleTimeString();

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

    setTimeout(() => {
      this.gameOver = true;
    }, this.timeForDeadline);
  }

}
