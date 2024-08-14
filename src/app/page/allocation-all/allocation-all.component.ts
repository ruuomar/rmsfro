import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-allocation-all',
  templateUrl: './allocation-all.component.html',
  styleUrl: './allocation-all.component.css'
})
export class AllocationAllComponent implements OnInit {
list: any;
allocations: any;
displayedColumns: string[] = ['supervisor', 'students'];
ngOnInit(): void {
  this.allocationAll.getAllAllocation().subscribe(data => {
    this.allocations = data;
  });

}
constructor(private router:Router,private allocationAll:AllocationService){}

generatePDF() {
  const doc = new jsPDF();

  let y = 10; // Vertical spacing

  doc.setFontSize(12);
  doc.text('Supervisor and Student Allocations', 10, y);
  y += 10;

  this.allocations.forEach((allocation: { supervisor: any; students: any[]; }) => {
    doc.setFontSize(10);
    doc.text(`Supervisor: ${allocation.supervisor}`, 10, y);
    y += 10;

    allocation.students.forEach(student => {
      doc.text(`- ${student}`, 20, y);
      y += 10;
    });

    y += 10; // Add extra space between groups
  });

  doc.save('allocations.pdf');
}

// getAllAllocation(){
//   this.allocationAll.getAllAllocation().subscribe((data)=>{
//     this.list = data
//     console.table(data)
//   })


}
