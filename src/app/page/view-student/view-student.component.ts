import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit {
  list:any
  constructor(private router:Router, private student:StudentService){}
  ngOnInit(): void {
    this.getAll()
    
  }
  getAll(){
    this.student.getAll().subscribe((data)=>{
      this.list = data

    })
  }



}
