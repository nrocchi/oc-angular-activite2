import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyDrl70Q5A95Bth1qV5tWh6uCqUWYjL3eoQ",
      authDomain: "oc-angular-activite2.firebaseapp.com",
      databaseURL: "https://oc-angular-activite2.firebaseio.com",
      projectId: "oc-angular-activite2",
      storageBucket: "oc-angular-activite2.appspot.com",
      messagingSenderId: "409436981335"
    };
    firebase.initializeApp(config);
  }
}
