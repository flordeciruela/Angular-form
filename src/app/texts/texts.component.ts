import { Component, OnInit } from '@angular/core';
import data from '../app.data';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css']
})
export class TextsComponent implements OnInit {

  texts = data;

  constructor() { }

  ngOnInit() {
  }

}
