
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupervisorService } from '../../services/supervisor.service';
import { StudentService } from '../../services/student.service';
import { AllocationService } from '../../services/allocation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-allocated',
  templateUrl: './allocated.component.html',
  styleUrls: ['./allocated.component.css']
})
export class AllocatedComponent implements OnInit {

  super: any;
  std: any;
  selectStudent!: string[];
  selectSupervisor!: string;
  supervisors: any;

  constructor(
    private supervisor: SupervisorService, 
    private student: StudentService,
    private router: Router,
    private allocation: AllocationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getSupervisor();
    this.getStudent();
  }



  getSupervisor() {
    this.supervisor.getSupervisor().subscribe((data) => {
      this.super = data;
      console.log('Supervisors:', this.super);
    });
  }



  getStudent() {
    this.student.getAllStudentSupervisor().subscribe((data) => {
      this.std = data;
      console.log('Students:', this.std);
    });
  }

 

  onSubmit(form: NgForm) {
    if (!this.selectSupervisor || this.selectStudent.length === 0) {
      console.error('Supervisor and students are required');
      return;
    }
    //  hizi data nazitoa kwenye servise
     const data = {
    sup_id: this.selectSupervisor,
    Stu_id: this.selectStudent,    
  };
    
    this.allocation.addallocation(data).subscribe((response: any) => {
      console.log('Data submitted successfully:', response);
        // Optionally, display a success message to the user
      }
    );
    
    this.snackBar.open('Form submitted successfully!', 'Close', {
      duration: 3000, // duration in milliseconds
    });
  
    form.resetForm();
  }

  goBack() {
    this.router.navigateByUrl('AllocationList');
  }
}

