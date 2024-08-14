import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../../services/allocation.service';
import { DocumentService } from '../../services/document.service';
import { DocumentDialogComponent } from '../document-dialog/document-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ResearchService } from '../../services/research.service';

@Component({
  selector: 'app-std-dashbord',
  templateUrl: './std-dashbord.component.html',
  styleUrl: './std-dashbord.component.css'
})
export class StdDashbordComponent implements OnInit {


constructor(
  private router:Router,
  private document:DocumentService, 
  private sanitizer: DomSanitizer,
  private dialog:MatDialog,
  private research:ResearchService,
){}

list: any;
  ngOnInit(): void {
  this.getAll();
  }


  // getAll(){
  //   this.document.getAll().subscribe((data)=>{
  //     this.list = data;
  //     console.log(data);
  //   })
  // }

  // getAll(): void {
  //   this.document.getAll().subscribe((data) => {
  //     if (Array.isArray(data)) {
  //       this.list = data;
  //     } else {
  //       this.list = [data]; // Convert the single object to an array
  //     }
  //     console.log(this.list);
  //   });
  // }

  getAll(){
    this.document.getAll().subscribe((data:any)=>{
      if (Array.isArray(data)) {
              this.list = data;
            } else {
              this.list = [data]; // Convert the single object to an array
            }
            console.log(this.list);
    });
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
  onEdit() {
    return this.router.navigateByUrl('updateDocument');
    }
  

}
