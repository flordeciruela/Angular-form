import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  timeForDeadline = 1*60*1000;
  dateDeadLine = new Date((new Date()).valueOf() + this.timeForDeadline)
  dateString = new Intl.DateTimeFormat().format(this.dateDeadLine) + ' a las '
               + this.dateDeadLine.toLocaleTimeString();

}
