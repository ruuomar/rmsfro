import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private http:HttpClient,private httpService:HttpServiceService) { }
  private url = String('http://127.0.0.1:8000/api/');

getAll(){
  return this.http.get(this.url+"getSupervisor")
}

getSupervisor(){
  return this.http.get(this.url+"getSuponly")
}

// for examiner
getExaminer(){
  return this.http.get(this.url+"getExamineronly")
}

getSupervisorCount(): Observable<{ count: number }> {
  return this.http.get<{ count: number }>(this.url+"countSupervisor");
}

// getSupervisors(){
//   return this.http.get(this.url)
// }

getstudentBySupervisor(){
 const headers = this.httpService.getAuthHeaders();
  return this.http.get<{data: any[], count: number}>(this.url+"getStudentBySupervisor", {headers})
}
}
