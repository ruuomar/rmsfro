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

  private link = String("http://127.0.0.1:8000/api/")

  getResearchById(research_id:any){
    const link1 = `${this.link+"getreserachByID"}/${research_id}/`;
    return this.http.get(link1)
  }

  updateResearch(research_id: string, data: any): Observable<any> {
    const urls = `${this.url+"/updater2"}/${research_id}/`
    return this.http.patch(urls, data);
  }


  

}
