import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    var config = {
      apiKey: "AIzaSyBco_CrprSQAxP0gbWZtyIEm3-Ky0THSko",
      authDomain: "roham-43b80.firebaseapp.com",
      databaseURL: "https://roham-43b80.firebaseio.com",
      projectId: "roham-43b80",
      storageBucket: "roham-43b80.appspot.com",
      messagingSenderId: "412557407144"
    };
    Firebase.initializeApp(config);  
  }
  
  


}
