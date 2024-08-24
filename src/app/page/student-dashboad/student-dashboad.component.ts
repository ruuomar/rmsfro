import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-student-dashboad',
  templateUrl: './student-dashboad.component.html',
  styleUrl: './student-dashboad.component.css'
})
export class StudentDashboadComponent implements OnInit {
  list:any
  constructor(private router:Router, private student:StudentService,private doc:DocumentService){}

  ngOnInit(): void {
    this.configarationStudent()
    this.getAll()
  }
  
  detailStudent!:FormGroup
  configarationStudent(){
    this.detailStudent = new FormGroup({
      std_name:new FormControl('',Validators.required),
      Std_program:new FormControl('',Validators.required),
      std_regNumber: new FormControl('', [Validators.required, registrationNumberValidator()])
    })
  }

  getAll(){
    this.doc.getAll().subscribe((data)=>{
      this.list = data;
      console.log(data)

    })}

  onsave(){
    const values = this.detailStudent.value
    this.student.add(values).subscribe((response)=>{
      // console.log(response)
      this.router.navigateByUrl('mysubmition')
    })
  }

  view(){}
  

}
function registrationNumberValidator() {
  const pattern = /^STU\/\d{1,2}\/\d{2}\/\d{3}\/[A-Z]{2}$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = pattern.test(control.value);
    return isValid ? null : { invalidRegistrationNumber: true };
  };
}

