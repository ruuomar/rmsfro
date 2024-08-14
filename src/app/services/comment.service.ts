import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

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
  

  constructor(private http:HttpClient, private httpService:HttpServiceService) { }
  private url = String("http://127.0.0.1:8000/api/")



  addComment(comment: Comment): Observable<any> {
    const headers = this.httpService.getAuthHeaders();

    return this.http.post(this.url+"insertcomment", comment, {headers });
  }

  getComment(): Observable<any>{
    const headers = this.httpService.getAuthHeaders();
    return this.http.get(this.url+'getCommentByStudent', {headers })
  }
  
}
