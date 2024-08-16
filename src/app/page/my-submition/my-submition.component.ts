import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-my-submition',
  templateUrl: './my-submition.component.html',
  styleUrl: './my-submition.component.css'
})
export class MySubmitionComponent implements OnInit {

  constructor(
    private router:Router,
    private documentService:DocumentService){}


  ngOnInit(): void {
    this.formConfigaration()
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.documentForm.patchValue({
        file: fileInput.files[0]
      });
    }
  }

 documentForm!: FormGroup

 formConfigaration(){
  this.documentForm = new FormGroup({
    title: new FormControl('',Validators.required),
    doc_type: new FormControl('',Validators.required),
    file: new FormControl('',Validators.required)

  })
 }
 onSubmit(): void {
    if (this.documentForm.valid) {
      const formData = new FormData();
      formData.append('title', this.documentForm.get('title')?.value);
      formData.append('doc_type', this.documentForm.get('doc_type')?.value);
      formData.append('file', this.documentForm.get('file')?.value);

      this.documentService.addResearch(formData).subscribe((data: any) => {
        console.log(data);
      });
    } else {
      console.log('Form is invalid');
    }
  }

 
  }


  

 


  





