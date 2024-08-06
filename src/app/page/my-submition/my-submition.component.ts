import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-my-submition',
  templateUrl: './my-submition.component.html',
  styleUrl: './my-submition.component.css'
})
export class MySubmitionComponent implements OnInit {
  list:any
  ngOnInit(): void {
    this.documentConfigaration()
    
  }
  constructor(private router:Router,private doc:DocumentService){}

  document!:FormGroup;
  selectedFile!: File;

  documentConfigaration(){
      this.document =new FormGroup({
      doc_Title:new FormControl('',Validators.required),
      doc_type:new FormControl('',Validators.required),
      doc_uplodfile:new FormControl('',Validators.required)
    })
  }
  
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSave() {
    const formData = new FormData();
    formData.append('doc_Title', this.document.get('doc_Title')?.value);
    formData.append('doc_type', this.document.get('doc_type')?.value);
    formData.append('doc_uplodfile', this.selectedFile);
    this.doc.add(formData).subscribe((data: any) => {
      console.log(data);
      this.document.reset();
    });
  }
  
 
  }




