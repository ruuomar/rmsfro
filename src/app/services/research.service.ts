import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private http:HttpClient, private httpService:HttpServiceService) { }

  private url = String("http://127.0.0.1:8000/api/Research")

  AddResearch(formData: FormData): Observable<any> {
    return this.http.post(this.url, formData);
  }


}
