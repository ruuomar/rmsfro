import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private url= String("http://127.0.0.1:8000/api/")

  constructor(private http:HttpClient) { }

  // add(body:any){
  //   return this.http.post(this.url+"insertDocument",body)
  // }

  add(body: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}` // according to your token storage
    });
    return this.http.post(this.url + 'insertDocument', body, { headers });
  }

  getAll(): Observable<any>{
    return this.http.get(this.url + "getDocument");
  }

  // getDocument(doc_id: any): Observable<Blob> {
  //   return this.http.get(`${this.url}getbydocument/${doc_id}`, { responseType: 'blob' });
  // }
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
    return this.http.get(`${this.url}getfile/${doc_id}`, { headers, responseType: 'blob' });
  }


  // private url1 = 'http://127.0.0.1:8000/api/getbydocument/';



  // getDocument(doc_id: string): Observable<any> {
  //   return this.http.get(`${this.url}${doc_id}/`);
  // }
}


