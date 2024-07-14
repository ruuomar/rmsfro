import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreDataaTokenService {

  constructor() { }
  private userID$ = new BehaviorSubject <string>("")
  private role$ = new BehaviorSubject <string>("")

  public setUserID(userID:string){
    this.userID$.next(userID);
  }

  public getUserIDFormStore(){
    return this.userID$.asObservable();
  }


 public setroleToStore(role:string){
  this.role$.next(role);
 } 

 public getRoleStore(){
  return this.role$.asObservable();
 }
}
