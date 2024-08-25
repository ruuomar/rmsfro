import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbod-examiner',
  templateUrl: './dashbod-examiner.component.html',
  styleUrl: './dashbod-examiner.component.css'
})
export class DashbodExaminerComponent {
  totalStudent: number = 0;
  constructor(private studentService:StudentService,
    private router:Router,
  ){}
viewStudent() {
  return this.router.navigateByUrl('getStudentbySupervisor')
}

}
