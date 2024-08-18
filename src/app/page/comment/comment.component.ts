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
  commentForm!: FormGroup;
  research_id!: string;



  constructor(
    private comment:CommentService,
    private route:ActivatedRoute,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    {
      this.commentForm = this.fb.group({
        description: [this.data.description || '']
      });
  }
}
onSave(): void {
  // Pass the form value back to the calling component
  this.dialogRef.close(this.commentForm.value);
}

onCancel(): void {
  this.dialogRef.close();  // No data is passed back
}
}

  
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




