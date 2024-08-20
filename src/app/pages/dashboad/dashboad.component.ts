import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.css'
})
export class DashboadComponent implements OnInit {

userCount: any;
allocationCount:number=0;
studentsCount:any
  constructor(private user:UserService,
    private allocation:AllocationService,
    private studentservice:StudentService,
    private router:Router){}
  ngOnInit(): void {
    this.fetchUserCount();
    this.fechAllocationCount();
    this.fechStudentCount();
   
  }
  
  fetchUserCount(): void {
    this.user.getAccountUser().subscribe(
      (data) => {
        this.userCount = data.user_count;
      },
      // (error) => {
      //   console.error('Error fetching user count:', error);
      //   this.userCount = undefined;
      // }
    );
  }

  fechAllocationCount():void{
      this.allocation.getfechAllocation().subscribe((data)=>{
        this.allocationCount=data

      })
  }

  fechStudentCount():void{
    this.studentservice.getcountStudent().subscribe((data)=>{
    this.studentsCount = data;
    })
  }

  listUser(){
    this.router.navigateByUrl('listUser()')
  }
  allocationList(){

  }

  studentView() {
    return this.router.navigateByUrl('view');
    }
}
