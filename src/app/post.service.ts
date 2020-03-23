import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './interface/message';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl = 'localhost:3000/v1/post'
  constructor(private http: HttpClient) {
    
  }
  addHero (message: Message): Observable<Message> {
    return this.http.post<Message>(this.postUrl, message, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'})
    })
      .pipe(
        // catchError(this.handleError('addHero', message))
      );
  }
}
