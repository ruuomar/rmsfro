import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../../services/allocation.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

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
    console.log("succesful deleted",list)
    this.getAll()
  })
}

generatePDF() {
  const doc = new jsPDF();
  doc.text('Supervisor and Student Allocation List', 14, 16);

  const head = [['Supervisor', 'Student Name', 'Registration Number', 'Program']];
  const data = this.list.flatMap((item: { students: any[]; supervisor: any; }) => 
    item.students.map((student, index) => [
      index === 0 ? item.supervisor : '', // Corrected typo here
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


  // exportToExcel(): void {
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.list.flatMap((item: any) =>
  //     item.students.map((student: any, index: number) => ({
  //       Supervisor: index === 0 ? item.supervisor : '',
  //       'Student Name': student.std_name,
  //       'Registration Number': student.std_regNumber,
  //       Program: student.Std_program
  //     }))
  //   ));
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   XLSX.writeFile(workbook, 'allocation_list.xlsx');
  // }

}
