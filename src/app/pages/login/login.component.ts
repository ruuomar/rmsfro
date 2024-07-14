import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StoreDataaTokenService } from '../../services/store-dataa-token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  auth = inject(AuthService)
  router = inject(Router)
  storeData = inject(StoreDataaTokenService)

logForm!:FormGroup

  ngOnInit(): void{
    this.formConrol();
  }

  formConrol() {
    // tunafany validation
     this.logForm=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
     })
  }
  // value zilizopitishwa kwenye input kuwa ushazishika
  onLogin(){
    const data = this.logForm.value
    this.auth.login(data).subscribe((response:any)=>{
      // console.table(response)
    this.auth.storeToken(response.access)
    
    const payload2 = this.auth.decodeToken() 
    this.storeData.setUserID(payload2.user_id)
    this.storeData.setroleToStore(payload2.role)
    

    if (payload2.role == 'Admin'){
      this.router.navigateByUrl('Dashboard')
    }

    else if (payload2.role == "Student"){
      this.router.navigateByUrl('studentDashboard')
    }
    else if(payload2.role == "Supervisor"){ 
      this.router.navigateByUrl('submition')
    }
      
    else if(payload2.role == "examiner"){
      this.router.navigateByUrl('AllocationList')
    }
    else if(payload2.role == "PGO"){
      this.router.navigateByUrl('AllocationList')
    }
      
    // this.router.navigateByUrl('Dashboard')
    // alert('login successful');
    
})
// console.log(data)
 }

}
