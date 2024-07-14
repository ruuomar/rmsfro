import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {
constructor(private user:UserService){}

recentStudents: any;
form1!:FormGroup

Form(){
  this.form1 = new FormGroup({
    first_name:new FormGroup('',Validators.required),
    Last_name:new FormGroup('',Validators.required),
    email:new FormGroup('',Validators.required),
    password:new FormGroup('',Validators.required)
  })
}

}
