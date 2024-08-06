import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupervisorService } from '../../services/supervisor.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-allocation-examiner',
  templateUrl: './allocation-examiner.component.html',
  styleUrl: './allocation-examiner.component.css'
})
export class AllocationExaminerComponent implements OnInit {
std: any;
examiner: any;
selectStudent: any;
list: any;
selectexaminer: any;


constructor(private router:Router,
  private supervisor:SupervisorService,
  private student:StudentService){}

ngOnInit(): void {
this.getExaminer()
this.getStudent()
}


onSubmit() {
  if(!this.selectexaminer|| this.selectStudent.length ===0){
    console.error('examiner and student are requide');
  }

  const data ={
    Examiner:this.selectexaminer,
    Student:this.selectStudent
  }
  // console.log('Submitted data:', data);
};

getExaminer() {
  this.supervisor.getExaminer().subscribe((data) => {
    this.examiner = data;
    console.log('Supervisors:', this.examiner);
  });
}

getStudent() {
  this.student.getAll().subscribe((data) => {
    this.std = data;
    console.log('Students:', this.std);
  });
}

goBack() {
  return this.router.navigateByUrl('allocaionExaminer')
  }

  ondelete() {}

}
