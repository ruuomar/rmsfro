import { Component } from '@angular/core';
import { SendCommentService } from '../../service/send-comment.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-send-comment',
  templateUrl: './send-comment.component.html',
  styleUrl: './send-comment.component.css'
})
export class SendCommentComponent {
  uploddocument!: FormGroup;
  file: File | null = null;

  constructor(
    private fb: FormBuilder, 
    private sendCommentService: SendCommentService
  ) {}

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
      formData.append('research_id', '5');
  
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
