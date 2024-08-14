import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private payload:any
  
  private url = String('http://127.0.0.1:8000/api/token')

  constructor(private http:HttpClient) {
    this.payload = this.decodeToken()
   }
  
  login(data:any){
    return this.http.post(this.url,data)
  }

  storeToken(token:any){
    return localStorage.setItem('token',token)
  }

  islogedin():boolean{
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
  

  decodeToken(){
    const jwthelper =new JwtHelperService()
    const token = this.getToken()!
    console.log(jwthelper.decodeToken(token));
    return jwthelper.decodeToken(token)
  }

  getuseIDfromPayload(){
    if(this.payload)
      return this.payload.user_id;
  }

  getRolefromPayload(){
    if (this.payload){
      return this.payload.role;
    }
  }

  checkStudentRegistration(userId: number): Observable<boolean> {
    return this.http.get<boolean>(`http://127.0.0.1:8000/api/check-registration/${userId}/`);
  }
      
}
