import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { webData } from './trial1.data';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Trial1Service {
  private url: string = "/assets/web.json";
  
  constructor(private http: HttpClient) {
    

  }
  getData():Observable<webData[]> {
    return this.http.get<webData[]>(this.url);
  }
}
