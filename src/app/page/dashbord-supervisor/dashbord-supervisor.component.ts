import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupervisorService } from '../../services/supervisor.service';

@Component({
  selector: 'app-dashbord-supervisor',
  templateUrl: './dashbord-supervisor.component.html',
  styleUrl: './dashbord-supervisor.component.css'
})
export class DashbordSupervisorComponent implements OnInit {
  totalStudent: number = 0;

constructor(private router:Router,private supervisorService:SupervisorService){}
  ngOnInit(): void {
    this.getStudentBySupervisor();
  }

getStudentBySupervisor() {
  this.supervisorService.getstudentBySupervisor().subscribe((response) => {
    this. totalStudent= response.count; // Set the total number of students
    console.log(this.totalStudent)
  }, (error) => {
    console.error('Error fetching students', error);
    // Handle error (optional)
  });
}

viewStudent(){
  return this.router.navigateByUrl('getStudentbySupervisor')
}
}
