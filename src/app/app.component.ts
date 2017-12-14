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
  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  addString(newString: string) {
    if (newString) {
      this.arr.push(newString);
    }
    console.log(this.arr);
  }

  ngOnInit(){
    this.form = this.fb.group({
      name: ['']
    })

    setTimeout(() => {
      this.gameOver = true;
      console.log("Game Over");
    }, 5000);
  }

}
