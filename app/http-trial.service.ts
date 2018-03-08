import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpTrialService {

  constructor(private http: HttpClient) {

  }
  getData():Observable<any> {
    return this.http.get("https://roham-43b80.firebaseio.com/title.json");
  }
}
