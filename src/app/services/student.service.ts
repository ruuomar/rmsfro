import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

export interface StudentCountResponse {
  student_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url= String("http://127.0.0.1:8000/api/")

  constructor(private http:HttpClient,
    private httpService:HttpServiceService ) { }

 
  add(body: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(this.url+"insertStudent", body, { headers });
  }


  getAllStudent(){
    const headers = this.httpService.getAuthHeaders();
    return this.http.get(this.url+"getStudent", {headers})
  }
  getSelfStudent(){
    const headers = this.httpService.getAuthHeaders();
    return this.http.get(this.url+"getStudentInfo",{headers})
  }


  getAllStudentSupervisor(){
    return this.http.get(this.url+"students_not_allocated_to_supervisors");
  }


  getAllStudentExaminer(){
    return this.http.get(this.url+"students_not_allocated_to_examiner")
  }

  getcountStudent(): Observable<StudentCountResponse>{
    return this.http.get<StudentCountResponse>(this.url+"countStudent")
  }
  
  get_student_statistics(){
    return this.http.get(this.url+"get_student_statistics")
  }
  
}
