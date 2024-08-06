import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private url= String("http://127.0.0.1:8000/api/")

  constructor(private http:HttpClient, private httpService: HttpServiceService) { }

  // add(body:any){
  //   return this.http.post(this.url+"insertDocument",body)
  // }

  add(body: any) {
    const headers = this.httpService.getAuthHeaders();
    return this.http.post(this.url + 'insertDocument', body, { headers });
  }

  getAll(): Observable<any>{
    const headers = this.httpService.getAuthHeaders();
    return this.http.get(this.url +"getResearch", { headers });
  }

  getAlldocument(): Observable<any>{
    const headers = this.httpService.getAuthHeaders();
    return this.http.get(this.url+"getDocument", {headers });
  }

  getDocument(doc_id: any): Observable<Blob> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}` // according to your token storage
    });
    return this.http.get(`${this.url}getbydocument/${doc_id}`, { headers, responseType: 'blob' });
  }
   
  getfile(doc_id: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(`${this.url}getfile/${doc_id}/`, { headers, responseType: 'blob' });
  }

  approve(doc_id: any): Observable<any> {
    const headers = this.httpService.getAuthHeaders(); // Assuming you have a method to get auth headers
    return this.http.patch(`${this.url}approvereserach/${doc_id}/`, { headers });
  }
}


