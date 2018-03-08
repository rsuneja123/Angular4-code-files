import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Component({
  selector: 'app-http-trial',
  templateUrl: './http-trial.component.html',
  styleUrls: ['./http-trial.component.css']
})
export class HttpTrialComponent implements OnInit {

  constructor(private https: HttpClient) { }

  ngOnInit() {
    this.https.post('https://jsonplaceholder.typicode.com/posts', { title: 'rohan1', code: 'bar1' })
      .subscribe(data => {
      console.log(data);
      })
    this.https.get('https://jsonplaceholder.typicode.com/posts/100').subscribe(data => {
      console.log("get occrd");
      console.log(data);
    })
    this.https.put('https://jsonplaceholder.typicode.com/posts/100', { title: 'updated' }).subscribe(data => {
      console.log(data);
    }

    )

      
  }

}
