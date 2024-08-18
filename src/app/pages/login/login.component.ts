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
errorMsg: any;

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
  onLogin() {
    const data = this.logForm.value;
    this.auth.login(data).subscribe(
      (response: any) => {
        this.auth.storeToken(response.access);
        const payload2 = this.auth.decodeToken();
        this.storeData.setUserID(payload2.user_id);
        this.storeData.setroleToStore(payload2.role);
  
        if (payload2.role === 'Admin') {
          this.router.navigateByUrl('Dashboard');
        } else if (payload2.role === 'Student') {
          this.checkStudentRegistration(payload2.user_id);
        } else if (payload2.role === 'Supervisor') {
          this.router.navigateByUrl('superDashbord');
        } else if (payload2.role === 'Examiner') {
          this.router.navigateByUrl('examinerDashbord');
        } else if (payload2.role === 'PGO') {
          this.router.navigateByUrl('pgoDashbord');
        }
      },
      (error) => {
        // Handle error response
        this.errorMsg = 'Invalid email or password. Please try again.';
      }
    );
  }
  

// onLogin() {
//   const data = this.logForm.value;
//   this.auth.login(data).subscribe(
//     (response: any) => {
//       this.auth.storeToken(response.access);
//       const payload2 = this.auth.decodeToken();
//       this.storeData.setUserID(payload2.user_id);
//       this.storeData.setroleToStore(payload2.role);

//       switch (payload2.role) {
//         case 'Admin':
//           this.router.navigateByUrl('Dashboard');
//           break;
//         case 'Student':
//           this.checkStudentRegistration(payload2.user_id);
//           break;
//         case 'Supervisor':
//           this.router.navigateByUrl('superDashbord');
//           break;
//         case 'Examiner':
//           this.router.navigateByUrl('examinerDashbord');
//           break;
//         case 'PGO':
//           this.router.navigateByUrl('pgoDashbord');
//           break;
//       }
//     },
//     (error) => {
//       // Handle error response
//       this.errorMsg = 'Invalid email or password. Please try again.';
//     }
//   );
// }


 checkStudentRegistration(userId: number) {
  this.auth.checkStudentRegistration(userId).subscribe((isRegistered: boolean) => {
    if (isRegistered) {
      this.router.navigateByUrl('stdDashboad');
      console.log(isRegistered);
      
    } else {
      this.router.navigateByUrl('studentDashboard');
      console.log(isRegistered);
      
    }
  });
}

}
