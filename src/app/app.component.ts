import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  timeForDeadline = 1*60*1000;
  dateDeadLine = new Date((new Date()).valueOf() + this.timeForDeadline)
  dateString = new Intl.DateTimeFormat().format(this.dateDeadLine) + ' a las '
               + this.dateDeadLine.toLocaleTimeString();
}
