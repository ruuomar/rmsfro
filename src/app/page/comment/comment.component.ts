import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  commentForm!: FormGroup;
  research_id!: string;



  constructor(
    private comment:CommentService,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.research_id = this.route.snapshot.paramMap.get('research_id')!;
     this.configarationForm() 
    
  }


  onSubmit() {
    const values = this.commentForm.value;
    const commentData = {
      ...values,
      research_id: this.research_id // Include doc_id in the submission
    };

    this.comment.addComment(commentData).subscribe((data: any) => {
      console.log('Comment data:', data);
      // Navigate or provide feedback upon successful submission
      this.commentForm.reset();
    });
  }


  configarationForm() {
    this.commentForm = new FormGroup({
      description: new FormControl(null,Validators.required)
    })
  }


//   comment: string = '';
// commentForm: FormGroup<any>;

//   constructor(public dialogRef: MatDialogRef<CommentComponent>) {}
//   ngOnInit(): void {
   
//   }

//   onSubmit() {
//     // Handle comment submission here, e.g., send to backend
//     console.log(this.comment);
//     this.dialogRef.close(this.comment); // Close the dialog and return the comment
//   }
}



