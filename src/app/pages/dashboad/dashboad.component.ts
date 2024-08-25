import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.css'
})
export class DashboadComponent implements OnInit {
chartData: any;
userCount: any;
allocationCount:number=0;
studentsCount:any
statistics: any;
constructor(private user:UserService,
  private allocation:AllocationService,
  private studentservice:StudentService,
  private router:Router){}
ngOnInit(): void {
  this.fetchUserCount();
  this.fechAllocationCount();
  this.fechStudentCount();
  this.studentservice.get_student_statistics().subscribe(data => {
    this.statistics = data;
    this.updateChartData();
  }, error => {
    console.error('Error fetching student statistics:', error);
  });
 
}
  
  fetchUserCount(): void {
    this.user.getAccountUser().subscribe(
      (data) => {
        this.userCount = data.user_count;
      },
      // (error) => {
      //   console.error('Error fetching user count:', error);
      //   this.userCount = undefined;
      // }
    );
  }

  fechAllocationCount():void{
      this.allocation.getfechAllocation().subscribe((data)=>{
        this.allocationCount=data

      })
  }

  fechStudentCount():void{
    this.studentservice.getcountStudent().subscribe((data)=>{
    this.studentsCount = data;
    })
  }

  listUser(){
    this.router.navigateByUrl('listUser()')
  }
  allocationList(){

  }

  studentView() {
    return this.router.navigateByUrl('view');
    }

    updateChartData(): void {
      this.chartData = {
        labels: ['Total Students', 'Titles Submitted', 'Proposals Submitted', 'Progress Reports Submitted', 'Allocated Supervisors', 'Allocated Examiners'],
        datasets: [{
          data: [
            this.statistics.total_students,
            this.statistics.title_submitted,
            this.statistics.proposal_submitted,
            this.statistics.progress_submitted,
            this.statistics.allocated_supervisors,
            this.statistics.allocated_examiners
          ],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0', '#F7464A'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0', '#F7464A']
        }]
      };
    }
  
    
}
