import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface CommentData { 
  description: string;
  status: string;
  doc_id: number;
}
@Injectable({
  providedIn: 'root'
})
export class AllocationService {
  private url = String('http://localhost:8000/api/');

  constructor(private http: HttpClient) {}

 getAllSupervisor(){
  return this.http.get(this.url+"supervisor_allocations")
 }

//  for examiner
getAllExaminer(){
  return this.http.get(this.url+"examiner_allocation")
}

  addallocation(body:any){
    return this.http.post(this.url+"insertallocation",body)
  }
  
 delete(allocate_Id:any){
  const urls = `${this.url+"deleteallocation"}/${allocate_Id}/`
  return this.http.delete(urls)
 }



}
