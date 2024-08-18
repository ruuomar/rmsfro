import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';
import { SupervisorService } from '../../services/supervisor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  private snackBar: MatSnackBar,
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

onDelete(list: any) {
  this.allocation.delete(list).subscribe(
    (data) => {
      this.getAll();
      // Show success message
      this.snackBar.open('Item deleted successfully!', 'Close', {
        duration: 3000, // Duration in milliseconds
        verticalPosition: 'top', // Positioning the snackbar at the top
      });
    },
    
  );

}

}
