
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../../services/document.service';


@Component({
  selector: 'app-reserch-document',
  templateUrl: './reserch-document.component.html',
  styleUrl: './reserch-document.component.css'
})
export class ReserchDocumentComponent implements OnInit {
//   documentForm: FormGroup;

//   constructor(private fb: FormBuilder, private document:DocumentService) {
//     this.documentForm = this.fb.group({
//       title: ['', Validators.required],
//       doc_type: ['concept note', Validators.required],
//       file: [null, Validators.required]
//     });
//   }

//   ngOnInit(): void {}

//   onFileChange(event: any) {
//     const file = event.target.files[0];
//     this.documentForm.patchValue({
//       file: file
//     });
//   }

//   onSave() {
//     if (this.documentForm.valid) {
//       const formData = new FormData();
//       formData.append('title', this.documentForm.get('title')?.value);
//       formData.append('doc_type', this.documentForm.get('doc_type')?.value);
//       formData.append('file', this.documentForm.get('file')?.value);

//       this.document.AddResearch(formData).subscribe(
//         response => {
//           console.log('Research submitted successfully', response);
//           // Handle success (e.g., show a success message, clear form, etc.)
//         },
//         error => {
//           console.error('Error submitting research', error);
//           // Handle error (e.g., show an error message)
//         }
//       );
//     }
//   }
// }

// researchForm!: FormGroup;

//   constructor(private documentService: DocumentService) {}

//   ngOnInit(): void {
//     this.configureResearchForm();
//   }

//   configureResearchForm() {
//     this.researchForm = new FormGroup({
//       title: new FormControl('', Validators.required),
//       doc_type: new FormControl('concept note', Validators.required),
//       file: new FormControl('', Validators.required)
//     });
//   }

//   onFileChange(event: any) {
//     const file = event.target.files[0];
//     this.researchForm.patchValue({
//       file: file
//     });
//   }

//   onSave() {
//     if (this.researchForm.valid) {
//       const formData = new FormData();
//       formData.append('title', this.researchForm.get('title')?.value);
//       formData.append('doc_type', this.researchForm.get('doc_type')?.value);
//       formData.append('file', this.researchForm.get('file')?.value);

//       this.documentService.AddResearch(formData).subscribe(
//         (data: any) => {
//           console.log('Research submitted successfully', data);
//           // Optionally, clear the form or handle success
//           this.researchForm.reset();
//         },
//         error => {
//           console.error('Error submitting research', error);
//           // Optionally, handle error feedback
//         }
//       );
//     }
//   }

myForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({});
  }
  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('File selected:', this.selectedFile);
    }
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      console.error('No file selected!');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

}
}