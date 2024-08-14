// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {MatStepperModule} from '@angular/material/stepper';
// import { SupervisorService } from '../../services/supervisor.service';
// import { StudentService } from '../../services/student.service';
// import { Router } from '@angular/router';
// import { AllocationService } from '../../services/allocation.service';

// // interface Food {
// //   value: string;
// //   viewValue: string;
// // }


// @Component({
//   selector: 'app-allocated',
//   templateUrl: './allocated.component.html',
//   styleUrl: './allocated.component.css'
// })


// export class AllocatedComponent implements OnInit {

//   super:any
//   std:any
// selecteProgram: any;
// selecRrgistrationNO: any;
// constructor(private supervisor:SupervisorService, private student:StudentService,private router:Router,private allocation:AllocationService){}
//   ngOnInit(): void {
//     this.getSupervisor();
//     this.getStudent();
//   }
//   selectStudent!: string;
//   selectSupervisor!: string;

//   // foods: Food[] = [
//   //   {value: 'steak-0', viewValue: 'Steak'},
//   //   {value: 'pizza-1', viewValue: 'Pizza'},
//   //   {value: 'tacos-2', viewValue: 'Tacos'},
//   // ];
  
//   getSupervisor() {
//     this.supervisor.getSupervisor().subscribe((data) => {
//       this.super = data;
//       console.log('Supervisors:', this.super);
//     });
//   }
  
//   getStudent() {
//     this.student.getAll().subscribe((data) => {
//       this.std = data;
//       console.log('Students:', this.std);
//     });
//   }

//   goBack() {
//     this.router.navigateByUrl('AllocationList');
//     }


//     onSubmit() {
//       const data = {
//         Supervisor: this.selectSupervisor,
//         Students: this.selectStudent
//       };
  
//       this.allocation.addallocation(data).subscribe((response: any) => {
//           console.log('Data submitted successfully:', response);
//           // Optionally, display a success message to the user
//         }
//       );
//     }

// }

     
 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupervisorService } from '../../services/supervisor.service';
import { StudentService } from '../../services/student.service';
import { AllocationService } from '../../services/allocation.service';

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
    private allocation: AllocationService
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
    this.student.getAll().subscribe((data) => {
      this.std = data;
      console.log('Students:', this.std);
    });
  }

  goBack() {
    this.router.navigateByUrl('AllocationList');
  }

  onSubmit() {
    if (!this.selectSupervisor || this.selectStudent.length === 0) {
      console.error('Supervisor and students are required');
      return;
    }

     const data = {
    sup_id: this.selectSupervisor, // Change from "Supervisor" to "sup_id"
    Stu_id: this.selectStudent    // Change from "Student" to "Stu_id"
  };
    
    this.allocation.addallocation(data).subscribe((response: any) => {
      console.log('Data submitted successfully:', response);
        // Optionally, display a success message to the user
      }
    );
  }
}

