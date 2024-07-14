import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent implements OnInit {

  constructor(private router:Router,private user:UserService,private activateRout:ActivatedRoute){}
  editUser!: FormGroup
 

  ngOnInit(): void {

    this.activateRout.params.subscribe((data:any)=>{
     console.log(data)
     const userID = data.userID
     this.getbyId(userID)
    })
    this.formControl()
    
  }
  

  formControl(){
    this.editUser = new FormGroup({
    userID:new FormControl(null),
    first_name:new FormControl('null',Validators.required),
    last_name:new FormControl('null', [Validators.required]),
    phoneNumber:new FormControl('null',[Validators.required]),
    email:new FormControl('null',[Validators.required]),
    password:new FormControl('null',[Validators.required]),
    role:new FormControl('null',[Validators.required])
    })
  }

  getbyId(userID:any){
    this.user.getByid(userID).subscribe((data:any)=>{
      console.log(data)
       // tunahamisha data tunaziweka hpa
    this.editUser.get('userID')?.setValue(data.userID)
    this.editUser.get('first_name')?.setValue(data.first_name)
    this.editUser.get('last_name')?.setValue(data.last_name)
    this.editUser.get('phoneNumber')?.setValue(data.phoneNumber)
    this.editUser.get('email')?.setValue(data.email)
    this.editUser.get('password')?.setValue(data.password)
    this.editUser.get('role')?.setValue(data.role)

    })

  }
  onSave(){
  const values =this.editUser.value
  const userID= this.editUser.value.userID
  this.user.update(userID,values).subscribe((newdata:any)=>{
    console.log(newdata)
  })
  // this.router.navigate(['/student'])
  }


}
