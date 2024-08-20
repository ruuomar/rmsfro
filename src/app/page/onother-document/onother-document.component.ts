import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearchService } from '../../services/research.service';

@Component({
  selector: 'app-onother-document',
  templateUrl: './onother-document.component.html',
  styleUrl: './onother-document.component.css'
})
export class OnotherDocumentComponent implements OnInit {

  documentUPdate!:FormGroup;
  selectedFile: File | null = null;

  constructor(
    private route:Router,
    private researchService:ResearchService,
    private fb:FormBuilder,
    private activateRout:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activateRout.params.subscribe((data:any)=>{
      const research_id = data.research_id
      this.getbyId(research_id)
    })
    this.formControl()
  }


  formControl() {
    this.documentUPdate = this.fb.group({
      research_id: [null],
      doc_type: [null, Validators.required],
      file: [null, Validators.required]
    });
  }
  

  getbyId(research_id:any){
    this.researchService.getResearchById(research_id).subscribe((data:any)=>{
      console.log(data)
       // tunahamisha data tunaziweka hpa
      this.documentUPdate.get('research_id')?.setValue(data.research_id)
      this.documentUPdate.get('doc_type')?.setValue(data.doc_type)
   
    })
  }
  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];

      console.log('File selected:', this.selectedFile); 
  
      // Update the form control with the selected file
      this.documentUPdate.patchValue({
        file: this.selectedFile
      });
  
      // Mark the file control as dirty/touched to ensure form validation triggers
      this.documentUPdate.get('file')?.updateValueAndValidity();
    }
  }
  
  onSave() {
    // console.log('Form Valid:', this.documentUPdate.valid);
    // console.log('Selected File:', this.selectedFile);

    if (this.documentUPdate.valid && this.selectedFile) {
        const formData = new FormData();
        formData.append('research_id', this.documentUPdate.get('research_id')!.value);
        formData.append('doc_type', this.documentUPdate.get('doc_type')!.value);
        formData.append('file', this.selectedFile);

        console.log('FormData contents:');
        formData.forEach((value, key) => console.log(`${key}: ${value}`));

        this.researchService.updateResearch(this.documentUPdate.get('research_id')!.value, formData).subscribe(
            (newData: any) => {
                console.log('Success:', newData);
            },
            (error) => {
                console.error('Error:', error);
            }
        );
    } else {
        console.log('Failed: Form is invalid or no file selected');
    }


}

  
  
  
  
}

    
  
  

  

