import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url= String("http://127.0.0.1:8000/api/")

  constructor(private http:HttpClient) { }

  add(body:any){
   return this.http.post(this.url+"insertUser",body);
  }

  getAll(){
    return this.http.get(this.url+"getuser");
  }

  getByid(userID:any){
    const urls =`${this.url+"usergetid"}/${userID}/`
    return this.http.get(urls)
  }

  update(userID:any,body:any){
    const urls = `${this.url+"userupdate"}/${userID}/`
    return this.http.put(urls,body)
  }

  delete(userID:any){
    const urls = `${this.url+"deleteuser"}/${userID}/`
    return this.http.delete(urls)
    
  }

}
