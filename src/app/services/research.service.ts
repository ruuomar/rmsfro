import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private http:HttpClient, private httpService:HttpServiceService) { }

  private url = String("http://127.0.0.1:8000/api/")



  getResearchById(research_id:any){
    const headers = this.httpService.getAuthHeaders();
    const link1 = `${this.url+"getreserachByID"}/${research_id}/`;
    return this.http.get(link1, {headers})
  }
  updateResearch(research_id: string, data: FormData): Observable<any> {
    const headers = this.httpService.getAuthHeaders(); 
    const urls = `${this.url}updater2/${research_id}/`;
    return this.http.patch(urls, data, { headers: { 'Accept': 'application/json' } });
}


  

}
