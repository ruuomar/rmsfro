import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DocumentDialogComponent } from '../document-dialog/document-dialog.component';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-submition',
  templateUrl: './submition.component.html',
  styleUrl: './submition.component.css'
})
export class SubmitionComponent implements OnInit {

onComplete: any;
  constructor(
    private router:Router,
    private documentservice:DocumentService, 
    private sanitizer: DomSanitizer,
    private dialog:MatDialog,
    private loyout:MainLayoutComponent
  ){}
  list:any
  ngOnInit(): void {
   this.getAll()
 
  }
  getAll(){
    this.documentservice.getAll().subscribe((data)=>{
      this.list = data;
      console.log(data);
    })

    // this.role = 'Supervisor';
    // this.role = 'Student';
  }

  // viewDocument(doc_id: string) {
  //    this.doc.getDocument(doc_id).subscribe((any) => {
  //     const url = window.URL.createObjectURL(any);
  //     window.open(url);
  //   });
  // }

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
    });
  
  }

  // onComment(research_id:any){
  //   console.log(research_id);
    
  //   return this.router.navigate(['/comment', research_id]);
  // }
  
  approve(research_id:any){
    return this.documentservice.approve(research_id).subscribe((response)=>{
      this.getAll()
      
      console.log("Document Approved Succesiffully"+ research_id)
    })  
  }
  rejected(research_id:any){
    return this.documentservice.reject_research(research_id).subscribe((response)=>{
      console.log('rejected');
      
      this.getAll()
    })
  }






  onComment(research_id: string) {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '400px',
      data: { researchId: research_id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the uploaded file and comment
        console.log('File and comment uploaded:', result);
        // You can send the result to the server here
      }
    });
  }
}
