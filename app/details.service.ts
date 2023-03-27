import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }
  strUrl: string = "http://localhost:8082/api/books";

  //book
  book(bookingObj: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };

    const body = JSON.stringify(bookingObj)
    return this.http.post(this.strUrl + '/booking',body, { 'headers': headers, 'responseType': 'text' })
  }
}