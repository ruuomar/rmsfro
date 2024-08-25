import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { UplodResultComponent } from '../uplod-result/uplod-result.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dissertation-result',
  templateUrl: './dissertation-result.component.html',
  styleUrl: './dissertation-result.component.css'
})
export class DissertationResultComponent implements OnInit{
  getGrade(averageMarks: number): string {
    if (averageMarks >= 70) {
      return 'A';
    } else if (averageMarks >= 60) {
      return 'B+';
    } else if (averageMarks >= 50) {
      return 'B';
    } else if (averageMarks >= 40) {
      return 'C';
    } else {
      return 'D';
    }
  }
  
  getRemark(averageMarks: number): string {
    if (averageMarks >= 70) {
      return 'Excellent';
    } else if (averageMarks >= 60) {
      return 'Very Good';
    } else if (averageMarks >= 50) {
      return 'Good';
    } else if (averageMarks >= 40) {
      return 'Fair';
    } else {
      return 'Fail';
    }
  }
  
items: any;
selectedFile: File | null = null;

constructor(private resultService:ResultService,private dialog: MatDialog){}

  ngOnInit(): void {
    this.getAllResult();
    
  }
  getAllResult(){
   this.resultService.pgogetResult().subscribe((data)=>{
    this.items = data;
    console.log(this.items)
   })
  }

  exportMarks() {
    this.resultService.exportResults().subscribe(
      (response: Blob) => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'results.xlsx'; // Specify the file name you want
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        console.log('File downloaded successfully');
      },
      error => {
        console.error('Error downloading the file:', error);
      }
    );
  }
  uploadMarks() {
    if (this.selectedFile) {
      this.resultService.uploadResults(this.selectedFile).subscribe(
        response => {
          console.log('File uploaded successfully:', response);
        },
        error => {
          console.error('Error uploading the file:', error);
        }
      );
    } else {
      console.warn('No file selected for upload');
    }
  }

  openUploadDialog(): void {
    this.dialog.open(UplodResultComponent, {
      width: '400px',
      // Optionally configure additional dialog properties here
    });
  }
}
