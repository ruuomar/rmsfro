import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  isStudentPreviouslySelected(studentId: number): boolean {
    throw new Error('Method not implemented.');
  }
  filter(arg0: (student: any) => any): any {
    throw new Error('Method not implemented.');
  }
  private url= String("http://127.0.0.1:8000/api/")

  constructor(private http:HttpClient) { }

  // add(body:any){
  //   return this.http.post(this.url+"insertStudent",body)
  // }
  add(body: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(this.url+"insertStudent", body, { headers });
  }
  getAll(){
    return this.http.get(this.url+"getStudent");
  }
}
