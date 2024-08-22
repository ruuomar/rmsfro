import { Component, OnInit } from '@angular/core';
import { SupervisorService } from '../../services/supervisor.service';

@Component({
  selector: 'app-studentby-supervisor',
  templateUrl: './studentby-supervisor.component.html',
  styleUrl: './studentby-supervisor.component.css'
})
export class StudentbySupervisorComponent  implements OnInit{
list: any;
  constructor(private supervisorService:SupervisorService){}

  ngOnInit(): void {
    this.getStudentSupervisor();
  }

  // getStudentSupervisor(){
  //  this.supervisorService.getstudentBySupervisor().subscribe((data)=>{
  //   this.list =data;
  //   console.log(this.list)
  //  })
  // }

  getStudentSupervisor(){
    this.supervisorService.getstudentBySupervisor().subscribe((response) => {
      this.list = response.data; 
      console.log(this.list);
    });
  }
    

}
