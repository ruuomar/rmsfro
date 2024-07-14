import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
constructor(private user:UserService,private router:Router,private dialog:MatDialog){}
  ngOnInit(): void {
   this.configrationAddUser()
  }


addUser!:FormGroup

configrationAddUser(){
  this.addUser = new FormGroup({
    first_name:new FormControl('', Validators.required),
    last_name:new FormControl('', Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    role:new FormControl('',Validators.required)

  })
}
onSave(){
  const values = this.addUser.value;
  this.user.add(values).subscribe((data:any)=>{
  console.log(data)
  })
}
}
