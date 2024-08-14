import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient) { }
  private url = String("http://127.0.0.1:8000/api/")

  addResult(body:any){
    return this.http.post(this.url+"insertresult",body)
  }
}
