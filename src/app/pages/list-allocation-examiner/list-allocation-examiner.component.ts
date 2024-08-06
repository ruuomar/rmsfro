import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';
import { SupervisorService } from '../../services/supervisor.service';

@Component({
  selector: 'app-list-allocation-examiner',
  templateUrl: './list-allocation-examiner.component.html',
  styleUrl: './list-allocation-examiner.component.css'
})
export class ListAllocationExaminerComponent implements OnInit {
list: any;
constructor(private router:Router,
  private allocation:AllocationService,
  private supervisor:SupervisorService,
){}

ngOnInit(): void {
  this.getAll()
  
}

onAllocation() {
return this.router.navigateByUrl('allocationForm')
}

getAll(){
 return this.allocation.getAllExaminer().subscribe((data)=>{
  this.list=data
  console.log(this.list)
 })
} 

ondelete(arg0: any) {}

}
