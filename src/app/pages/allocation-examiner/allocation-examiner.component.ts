import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupervisorService } from '../../services/supervisor.service';
import { StudentService } from '../../services/student.service';
import { AllocationService } from '../../services/allocation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-allocation-examiner',
  templateUrl: './allocation-examiner.component.html',
  styleUrl: './allocation-examiner.component.css'
})

export class AllocationExaminerComponent implements OnInit {
std: any;
examiner: any;
selectStudent!: string[]
selectexaminer!: string[]





constructor(private router:Router,
  private supervisor:SupervisorService,
  private student:StudentService,
  private allocationservice:AllocationService,
  private snackBar: MatSnackBar){}

ngOnInit(): void {
this.getExaminer()
this.getStudent()
}

onSubmit(form: NgForm) {
  this.std = this.std.filter((student: any) => !this.selectStudent.includes(student.Stu_id));
  console.log('Filtered Students:', this.std);

  if (!this.selectexaminer || this.selectStudent.length === 0) {
    console.error('Supervisor and students are required');
    return;
  }

   const data = {
  sup_id: this.selectexaminer, // Change from "Supervisor" to "sup_id"
  Stu_id: this.selectStudent    // Change from "Student" to "Stu_id"
};
  
  this.allocationservice.addallocation(data).subscribe((response: any) => {
    console.log('Data submitted successfully:', response);
      // Optionally, display a success message to the user
    }
  );
  this.snackBar.open('Form submitted successfully!', 'Close', {
    duration: 3000, // duration in milliseconds
  });

  form.resetForm();
}
getExaminer() {
  this.supervisor.getExaminer().subscribe((data) => {
    this.examiner = data;
    console.log('Supervisors:', this.examiner);
  });
}

getStudent() {
  this.student.getAllStudentExaminer().subscribe((data) => {
    this.std = data;
    console.log('Students:', this.std);
  });
}

goBack() {
  return this.router.navigateByUrl('allocaionExaminer')
  }

  ondelete() {}

}
