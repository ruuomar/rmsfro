import { Component, OnInit } from '@angular/core';
import { SupervisorService } from '../../services/supervisor.service';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';

@Component({
  selector: 'app-pgo-dashbord',
  templateUrl: './pgo-dashbord.component.html',
  styleUrl: './pgo-dashbord.component.css'
})
export class PgoDashbordComponent  implements OnInit{
  supervisorCount: number | null = null;
  allocationCount:number=0;
  ngOnInit(): void {
      this.fechAllocationCount();
      this.fetchSupervisorCount()
  }
  constructor(
    private supervisorService:
    SupervisorService,
    private router:Router,
    private allocationservice:AllocationService){}


  fetchSupervisorCount(): void {
    this.supervisorService.getSupervisorCount().subscribe({
      next: (data) => {
        this.supervisorCount = data.count;
      }
      
    })
  }
  fechAllocationCount():void{
    this.allocationservice.getfechAllocation().subscribe((data)=>{
      this.allocationCount=data

    })
}
  
studentView(){
      return this.router.navigateByUrl('view')
  }

supervisorView() {
    return this.router.navigateByUrl('viewSupervisor')
  }

allocationList(){
  return this.router.navigateByUrl('allocationAll')
}

}
