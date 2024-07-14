
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { EdituserComponent } from '../edituser/edituser.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
  list:any
  constructor(private router:Router,private user:UserService,private dialog:MatDialog){}

  ngOnInit(): void {
   this.getAll()
  }

  getAll(){
        this.user.getAll().subscribe((data)=>{
          this.list = data;
          console.log(this.list);
        })
  }
 
  onupdate(userID:any){
    this.router.navigateByUrl('edituser/'+userID)

  }

  ondelete(list:any){
    this.user.delete(list).subscribe(()=>{
      console.log("delete succuss")
      this.getAll()
    })

  }

  addUser(){
    // this.router.navigateByUrl('adduser')
     // this.router.navigate(['/studentForm']);
     {const options = {
      data :{
            crudMod: 'create',
            student: null
      },
      width:'60%',
      height:'50%'
    }

    this.dialog.open(EdituserComponent,options)
    


    }
    
  }
 
}
