import { Component, Inject, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  file!:any
//   commentForm!: FormGroup;
//   research_id!: string;



//   constructor(
//     private comment:CommentService,
//     private route:ActivatedRoute,
//     private fb: FormBuilder,
//     public dialogRef: MatDialogRef<CommentComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {
//     {
//       this.commentForm = this.fb.group({
//         description: [this.data.description || '']
//       });
//   }
// }
// onSave(): void {
//   // Pass the form value back to the calling component
//   this.dialogRef.close(this.commentForm.value);
// }

// onCancel(): void {
//   this.dialogRef.close();  // No data is passed back
// }
// }

  
  // ngOnInit(): void {
  //   this.research_id = this.route.snapshot.paramMap.get('research_id')!;
  //    this.configarationForm() 
    
  // }


  // onSubmit() {
  //   const values = this.commentForm.value;
  //   const commentData = {
  //     ...values,
  //     research_id: this.research_id // Include doc_id in the submission
  //   };

    // this.comment.addComment(commentData).subscribe((data: any) => {
    //   console.log('Comment data:', data);
    //   // Navigate or provide feedback upon successful submission
    //   this.commentForm.reset();
    // });
// }


  // configarationForm() {
  //   this.commentForm = new FormGroup({
  //     description: new FormControl(null,Validators.required)
  //   })
  // }

  uploadForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { research_id: any },
    private fb: FormBuilder,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<CommentComponent>
) {
    this.uploadForm = this.fb.group({
        commentFile: [null, Validators.required]
    });
}

onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
        // Set the selected file to the form control
        this.uploadForm.patchValue({
            commentFile: fileInput.files[0]
        });
    }
}
onSubmit(): void {
  if (this.uploadForm.valid) {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('commentFile')?.value);

    this.commentService.addComment(this.data.research_id, formData).subscribe(
      response => {
        console.log('File uploaded successfully', response);
        this.dialogRef.close(); // Close the dialog on success
      },
      error => {
        console.error('File upload failed', error);
        if (error.error) {
          console.error('Error response:', error.error);
        }
      }
    );
  } else {
    console.log('Form is invalid');
  }
}

onClose(): void {
    this.dialogRef.close(); // Close the dialog without doing anything
}

}
