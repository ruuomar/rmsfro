
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../../services/document.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DocumentDialogComponent } from '../document-dialog/document-dialog.component';
import { AddResultDialogComponent } from '../add-result-dialog/add-result-dialog.component';
import { ResultService } from '../../services/result.service';
import { CommentComponent } from '../comment/comment.component';
import { CommentService } from '../../services/comment.service';


@Component({
  selector: 'app-reserch-document',
  templateUrl: './reserch-document.component.html',
  styleUrl: './reserch-document.component.css'
})
export class ReserchDocumentComponent implements OnInit {

  items: any
  constructor(
    private router:Router,
    private documentservice:DocumentService, 
    private commentservice:CommentService,
    private resultService:ResultService,
    private sanitizer: DomSanitizer,
    private dialog:MatDialog,
  ){}
 

  ngOnInit(): void {
    this.getDocumentCompleted();
  }

  getDocumentCompleted() {
    this.documentservice.getAll().subscribe((data) => {
      // Filter to include only completed research items
      this.items = data.filter((item: any) => item.is_completed === true);
      console.log(this.items);
    });
  }

  viewfile(research_id: string): void {
    this.documentservice.getfile(research_id).subscribe((blob) => {
      const file = new Blob([blob], { type: blob.type });
      const url = window.URL.createObjectURL(file);
  
      // Open the document in a dialog
      this.dialog.open(DocumentDialogComponent, {
        data: { url },
        width: '100%',
        height: '100%'
      });
  
      // Add a download link
      const a = document.createElement('a');
      a.href = url;
      a.download = `document_${research_id}`; //hii kwajili ya kuset document kwamba document fulani ndio ambayo na idowlod
      a.click();
      // document.body.removeChild(a); 
    });
  }


  // onComment(research_id:any){
  //   console.log(research_id);
    
  //   return this.router.navigate(['/comment', research_id]);
  // }

  // onAddResult(){
  //   return this.router.navigateByUrl('addResult')
  // }

  openAddResultDialog(research_id: string): void {
    const dialogRef = this.dialog.open(AddResultDialogComponent, {
      width: '300px',
      data: { marks: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(`Research ID: ${research_id}, Marks: ${result}`);
        // Implement the logic to save the result, e.g., call a service
        this.resultService.addResult(research_id, result).subscribe((data)=>{
          console.log('Result saved successfully:', data);
        })
      }
    });
  }

  openCommentDialog(research_id: string): void {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '400px',
      data: {description:''} // Pass any data if needed
    });

  //   dialogRef.afterClosed().subscribe(description => {
  //     // console.log(`Research ID: ${research_id}, Description: ${result}`);
  //     if (description !== undefined) {
  //       console.log(`Research ID: ${research_id}, description: ${description}`);
  //       // Implement the logic to save the result, e.g., call a service
  //       this.commentservice.addComment(research_id, description).subscribe((data)=>{
  //         console.log('Result saved successfully:', data);
  //       })
  //     }
  //   });
  // }
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      const description = result.description || '';  // Make sure to extract the correct field
      console.log(`Research ID: ${research_id}, description: ${description}`);
      this.commentservice.addComment(research_id, description).subscribe(
        (data) => {
          console.log('Result saved successfully:', data);
        },
        (error) => {
          console.error('Error saving comment:', error);
        }
      );
    }
  });
  }
}