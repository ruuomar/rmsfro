import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from '../services/http-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendCommentService {

  private url = 'http://127.0.0.1:8000/api/insertcomment'; // Ensure this is correct

  constructor(private http: HttpClient, private httpService: HttpServiceService) {}

  uploadFile(formData: FormData): Observable<any> {
    let headers = this.httpService.getAuthHeaders();
    headers = headers.delete('Content-Type'); // Remove the Content-Type header
    return this.http.post(this.url, formData, { headers });
  }

}
