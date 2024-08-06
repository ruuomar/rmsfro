import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-reg',
  templateUrl:'./reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent implements OnInit{
  constructor(private router:Router, private user:UserService){}

  
  ngOnInit(): void {
    this.configrationForm();
  }
  

  form!:FormGroup

  configrationForm(){
    this.form =new FormGroup({
    first_name:new FormControl('', Validators.required),
    last_name:new FormControl('', Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    })  
  }

  onSave(){
  const values = this.form.value;
  this.user.add(values).subscribe((data:any)=>{
  console.log(data)
  this.router.navigateByUrl('login')
   })
  }

}
