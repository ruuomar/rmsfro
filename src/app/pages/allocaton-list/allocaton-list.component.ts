import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../../services/allocation.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-allocaton-list',
  templateUrl:  './allocaton-list.component.html',
  styleUrl: './allocaton-list.component.css'
  
})
export class AllocatonListComponent implements OnInit {

 list:any
allocations: any;
onedit() {

}

constructor(private allocation:AllocationService,private router:Router){}

  ngOnInit(): void {
    this.allocation.getAllAllocation().subscribe(data => {
      this.allocations = data;});
    this.getAll()
  
  }

onAllocation(){
    return this.router.navigateByUrl('allocation')
}

getAll(){
  this.allocation.getAllSupervisor().subscribe((data)=>{
    this.list = data;
    console.log('data',this.list);
  })
}

ondelete(list:any){
  this.allocation.delete(list).subscribe(()=>{
    console.log("succesful deleted")
    this.getAll()
  })
}

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

}
