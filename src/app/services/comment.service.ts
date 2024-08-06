import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Comment {
  doc_id: number;
  Supervisor: number;
  status: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  private url = String("http://127.0.0.1:8000/api/")

  // addComment(comment: Comment): Observable<Comment> {
  //   return this.http.post<Comment>(this.url+"insertcomment",comment);
  // }

  addComment(comment: Comment): Observable<any> {
    return this.http.post(this.url+"insertcomment", comment);
  }

  get(){
    return this.http.get(this.url+'getbyComment')
  }
  
}
