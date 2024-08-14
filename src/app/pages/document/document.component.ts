import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';
import { DocumentService } from '../../services/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DocumentDialogComponent } from '../../page/document-dialog/document-dialog.component';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent  implements OnInit{
  list:any
  constructor(private router:Router,private document:DocumentService,
    private sanitizer: DomSanitizer,
    private dialog:MatDialog,
   ){}

ngOnInit(): void {
  this.getAll()
}


getAll(){
  this.document.getAlldocument().subscribe((data)=>{
    this.list = data;
    console.log( data);
  })
  
}

viewfile(doc_id: string): void {
  this.document.getfile(doc_id).subscribe((blob) => {
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

}
