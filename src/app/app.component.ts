import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

interface Post {
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: Observable<firebase.User>;
  postsCol: AngularFirestoreCollection<Post>;
  items: Observable<Post[]>;
  content: string;

  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
    this.afAuth.auth.signInAnonymously();
    this.user = this.afAuth.authState;
    this.postsCol = db.collection('data');
    this.items = this.postsCol.valueChanges();
  }

  ngOnInit() {
    this.posts = this.items;
  }

  addPost() {
    this.postsCol.add({'text': this.content});
  }
}
