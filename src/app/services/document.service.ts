import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  reset() {
    throw new Error('Method not implemented.');
  }
  private url= String("http://127.0.0.1:8000/api/")

  constructor(private http:HttpClient, private httpService: HttpServiceService) { }

  // add(body:any){
  //   return this.http.post(this.url+"insertDocument",body)
  // }

  add(body: any) {
    const headers = this.httpService.getAuthHeaders();
    return this.http.post(this.url + 'insertDocument', body, { headers });
  }

  checkResearchSubmission(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(this.url + 'check_reseach_submission', { headers });
  }

  getAll(): Observable<any>{
    const headers = this.httpService.getAuthHeaders();
    return this.http.get(this.url +"getresearch", { headers });
  }

  getAlldocument(): Observable<any>{
    const headers = this.httpService.getAuthHeaders();
    return this.http.get(this.url+"getAllDocument", {headers });
  }

  getDocument(doc_id: any): Observable<Blob> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}` // according to your token storage
    });
    return this.http.get(`${this.url}getbydocument/${doc_id}`, { headers, responseType: 'blob' });
  }
   
  getfile(research_id: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(`${this.url}getReserch/${research_id}/`, { headers, responseType: 'blob' });
  }

  approve(research_id: any): Observable<any> {
    const headers = this.httpService.getAuthHeaders(); // Assuming you have a method to get auth headers
    return this.http.patch(`${this.url}approveresearch/${research_id}/`, { headers });
  }

  reject_research(research_id:any):Observable<any>{
    const headers = this.httpService.getAuthHeaders();
    return this.http.patch(`${this.url}rejectresearch/${research_id}/`,{ headers });
  }

  // AddResearch(body:any): Observable<any> {
  //   const headers = this.httpService.getAuthHeaders();
  //   return this.http.post(this.url+"insertresearch",body ,{ headers })
  // }
  // AddResearch(body: FormData): Observable<any> {
  //   const headers = this.httpService.getAuthHeaders(); // Adjust this if needed
  //   return this.http.post(this.url + "insertresearch", body, { headers });
  // }

  addResearch(formData: FormData): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(this.url + 'Research', formData, { headers });
  }

  private getAuthHeaders(): HttpHeaders {
    // Retrieve the token from wherever it's stored (e.g., localStorage)
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}


