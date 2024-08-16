import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResearchService } from '../../services/research.service';

@Component({
  selector: 'app-onother-document',
  templateUrl: './onother-document.component.html',
  styleUrl: './onother-document.component.css'
})
export class OnotherDocumentComponent implements OnInit {
  simpleForm!:FormGroup;
  researchId!: string;

  constructor(
    private route:ActivatedRoute,
    private researchService:ResearchService,
    private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.researchId = this.route.snapshot.paramMap.get('research_id')!;
    this.loadResearchData();
  }
  
  loadResearchData() {
    this.researchService.getResearchById(this.researchId).subscribe((data) => {
      this.simpleForm.patchValue(data);
    });
  }
  onSubmit() {
    this.researchService.updateResearch(this.researchId, this.simpleForm.value).subscribe(response => {
      console.log('Research updated', response);
      // handle success (e.g., navigate away, show a message)
    });
  }

}
