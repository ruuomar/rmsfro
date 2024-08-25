import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';
import { SupervisorService } from '../../services/supervisor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import jsPDF from 'jspdf';

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



ondelete(list:any){
  this.allocation.delete(list).subscribe(()=>{
    console.log("succesful deleted", list)
    this.getAll()
  })
}

generatePDF() {
  const doc = new jsPDF();
  doc.text('Examiner and Student Allocation List', 14, 16);

  const head = [['Examiner', 'Student Name', 'Registration Number', 'Program']];
  const data = this.list.flatMap((item: { students: any[]; examiner: any; }) => 
    item.students.map((student, index) => [
      index === 0 ? item.examiner : '', // Corrected typo here
      student.std_name,
      student.std_regNumber,
      student.Std_program
    ])
  );

  (doc as any).autoTable({
    head: head,
    body: data,
    startY: 20,
  });

  doc.save('allocation_list.pdf');
  }

}
