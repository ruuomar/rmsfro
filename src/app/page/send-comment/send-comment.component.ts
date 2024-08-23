import { Component, Inject } from '@angular/core';
import { SendCommentService } from '../../service/send-comment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-send-comment',
  templateUrl: './send-comment.component.html',
  styleUrl: './send-comment.component.css'
})
export class SendCommentComponent {
  uploddocument!: FormGroup;
  file: File | null = null;
  researchId:string
  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: { researchId: string }, // Inject the data
    private fb: FormBuilder, 
    private sendCommentService: SendCommentService
  ) {
    this.researchId = data.researchId;
  }

  ngOnInit(): void {
    this.uploddocument = this.fb.group({
      file: [null] // Initialize with null or any other default value
    });
  }

  onFileChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.file = fileInput.files[0];
      this.uploddocument.patchValue({
        file: this.file
      });
    }
  }

  upload(): void {
    if (this.file) {
      const formData = new FormData();
      formData.append('commentFile', this.file);
      formData.append('research_id', this.researchId);
  
      this.sendCommentService.uploadFile(formData).subscribe(
        resp => alert('Uploaded successfully'),
        error => {
          console.error('Upload failed:', error);
          alert('Upload failed: ' + error.message);
        }
      );
    } else {
      alert('Please select a file first');
    }
  }
  
}
