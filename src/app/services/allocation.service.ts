import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserCountResponse {
  allocation: number;
}

@Injectable({
  providedIn: 'root'
})
export class AllocationService {
  private url = String('http://localhost:8000/api/');

  constructor(private http: HttpClient) {}

addallocation(body:any){
    return this.http.post(this.url+"insertallocation",body)
  }
// for supervisoronly
getAllSupervisor(){
  return this.http.get(this.url+"supervisorAllocation")
 }

//  for examiner
getAllExaminer(){
  return this.http.get(this.url+"examinerAllocation")
}

getAllAllocation(){
  return this.http.get(this.url+"getallac")
}


  
 delete(allocate_Id:any){
  const urls = `${this.url+"deleteallocation"}/${allocate_Id}/`
  return this.http.delete(urls)
 }

getfechAllocation():Observable<number>{
  return this.http.get<number>(this.url+"countAllocation")
}

}
