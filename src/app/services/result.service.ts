import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { Observable } from 'rxjs';

export interface ResultData {
  total_marks: number;
  devider: number;
  average: number;
  grade: string;
  remark: string;
  tittle: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient,private httpService:HttpServiceService) { }
  private url = String("http://127.0.0.1:8000/api/")

  addResult(research_id: string, marks: number) {
    const body = { research_id, marks };
    console.log(body);
    
    const headers = this.httpService.getAuthHeaders();
    return this.http.post(this.url + "insertresult", body, { headers });
}
getResult() {
  const headers = this.httpService.getAuthHeaders();
  return this.http.get<ResultData>(this.url + "studentgetresult", { headers });
}

pgogetResult(){
  const headers = this.httpService.getAuthHeaders();
  return this.http.get<ResultData>(this.url + "supervisorgetallresult", { headers });
}

// ExportResult(){
//   const headers = this.httpService.getAuthHeaders();
//   return this.http.get(this.url + "download_excel", { headers });
// }

exportResults(): Observable<Blob> {
  const headers = this.httpService.getAuthHeaders();
  return this.http.get(`${this.url}download_excel`, {
    headers,
    responseType: 'blob' // Important: Set the response type to blob
  });
}


uploadResults(file: File): Observable<any> {
  const formData = new FormData();
  formData.append('file', file);

  return this.http.post(`${this.url}upload_result`, formData, {
    headers: this.httpService.getAuthHeaders(), // Ensure no Content-Type is manually set here
    responseType: 'arraybuffer'
  });
}
}
