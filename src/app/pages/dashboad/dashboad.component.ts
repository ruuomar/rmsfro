import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.css'
})
export class DashboadComponent implements OnInit {
userCount: any;
allocationCount:number=0;
  constructor(private user:UserService,
    private allocation:AllocationService,
    private router:Router){}
  ngOnInit(): void {
    this.fetchUserCount(),
    this.fechAllocationCount()
   
  }
  
  fetchUserCount(): void {
    this.user.getAccountUser().subscribe(
      (data) => {
        this.userCount = data.user_count;
      },
      (error) => {
        console.error('Error fetching user count:', error);
        this.userCount = undefined;
      }
    );
  }

  fechAllocationCount():void{
      this.allocation.getfechAllocation().subscribe((data)=>{
        this.allocationCount=data

      })
  }

  listUser(){
    this.router.navigateByUrl('listUser()')
  }
  allocationList(){

  }
}
