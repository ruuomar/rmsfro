import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-internal-examiner',
  templateUrl: './internal-examiner.component.html',
  styleUrl: './internal-examiner.component.css'
})
export class InternalExaminerComponent {
  // document: any;

  // constructor(private route:ActivatedRoute, private doc:DocumentService) {}

  // ngOnInit(): void {
  //   const doc_id = this.route.snapshot.paramMap.get('doc_id');
  //   this.doc.getDocument(doc_id).subscribe(data => {
  //     this.document = data;
  //   });
  // }
}
