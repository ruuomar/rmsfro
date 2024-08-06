import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  newComment = '';
  docId!: number;
item: any;
Supervisor:any
  constructor(private commentService: CommentService,private router:Router) { }

  ngOnInit(): void {
    // this.router.params.subscribe(params => {
    //   this.doc_id = +params['doc_id']; // Retrieve the document ID from the route
    // });
  }

  addComment(): void {
    if (this.newComment.trim()) {
      const comment = {
        doc_id: this.docId,
        Supervisor:  this.Supervisor, // Replace with the actual supervisor ID
        status: 'new', // Or any relevant status
        description: this.newComment,
      };

      this.commentService.addComment(comment).subscribe(response => {
        // Handle success response
        console.log('Comment added:', response);
        this.newComment = ''; // Clear the comment input
      }, error => {
        // Handle error response
        console.error('Error adding comment:', error);
      });
    }
  }
}
