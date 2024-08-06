import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DocumentDialogComponent } from '../document-dialog/document-dialog.component';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';

@Component({
  selector: 'app-submition',
  templateUrl: './submition.component.html',
  styleUrl: './submition.component.css'
})
export class SubmitionComponent implements OnInit {
  constructor(
    private router:Router,
    private doc:DocumentService, 
    private sanitizer: DomSanitizer,
    private dialog:MatDialog,
    private loyout:MainLayoutComponent
  ){}
  list:any
  ngOnInit(): void {
   this.getAll()
 
  }
  getAll(){
    this.doc.getAll().subscribe((data)=>{
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

  viewfile(doc_id: string): void {
    this.doc.getfile(doc_id).subscribe((blob) => {
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

  onComment(doc_id:any){
    return this.router.navigateByUrl('comment')
  }
  
  approve(doc_id:any){
    return this.doc.approve(doc_id).subscribe((response)=>{
      console.log("Document Approved Succesiffully")
    })
    
    
  }
  
}
