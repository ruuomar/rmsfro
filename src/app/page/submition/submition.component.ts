import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-submition',
  templateUrl: './submition.component.html',
  styleUrl: './submition.component.css'
})
export class SubmitionComponent implements OnInit {
  constructor(private router:Router,private doc:DocumentService, private sanitizer: DomSanitizer){}
  list:any
  ngOnInit(): void {
   this.getAll()
    
  }
  getAll(){
    this.doc.getAll().subscribe((data)=>{
      this.list = data;
    })
  }

  // viewDocument(doc_id: string) {
  //    this.doc.getDocument(doc_id).subscribe((any) => {
  //     const url = window.URL.createObjectURL(any);
  //     window.open(url);
  //   });
  // }
  viewDocument(doc_id: string) {
    this.doc.getDocument(doc_id).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
  

  viewfile(doc_id: string): void {
    this.doc.getfile(doc_id).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

}
