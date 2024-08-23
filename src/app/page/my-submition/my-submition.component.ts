

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-my-submition',
  templateUrl: './my-submition.component.html',
  styleUrls: ['./my-submition.component.css']
})
export class MySubmitionComponent implements OnInit {

  documentForm!: FormGroup;
  isFirstSubmission: boolean = true; // Assume it's the first submission initially

  constructor(
    private router: Router,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {
    this.checkResearchSubmission(); // Check if research is already submitted
    this.formConfigaration(); // Configure the form
  }

  checkResearchSubmission(): void {
    this.documentService.checkResearchSubmission().subscribe((response: any) => {
      this.isFirstSubmission = !response.isSubmitted;
      if (this.isFirstSubmission) {
        // If it's the first submission, automatically set the document type to 'Concept Note'
        this.documentForm.get('doc_type')?.setValue('concept note');
        this.documentForm.get('doc_type')?.disable(); // Disable the dropdown
      }
    });
  }

  formConfigaration(): void {
    this.documentForm = new FormGroup({
      title: new FormControl('', Validators.required),
      doc_type: new FormControl('', Validators.required),
      file: new FormControl('', Validators.required)
    });
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.documentForm.patchValue({
        file: fileInput.files[0]
      });
    }
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
