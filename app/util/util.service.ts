import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtilService {

  constructor(private http: HttpClient) { }
  get(url, options):Observable<any> {
    return this.http.get(url, options);
  }
  post(url, body,options): Observable<any> {
    return this.http.post(url,body, options);
  }
  put(url,body, options): Observable<any> {
    return this.http.put(url,body, options);
  }
  delete(url, options): Observable<any> {
    return this.http.delete(url, options);
  }


}
