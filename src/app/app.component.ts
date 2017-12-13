import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cadaver Exquisito';
  form: FormGroup;
  fb: FormBuilder;
  arr = ["¡Quiero torta!",
             "La niña baila marinera en el patio",
             "Pensando en lo mismo",
             "Me gusta la música",
             "Camaron que se duerme se lo lleva la corriente",
             "Laboratoria es código que transforma",
             "Todo va a estar bien",
             "Me encanta bailar para relajarme"];

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
