import { Component } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-uplod-result',
  templateUrl: './uplod-result.component.html',
  styleUrl: './uplod-result.component.css'
})
export class UplodResultComponent {
onClose() {
throw new Error('Method not implemented.');
}
  selectedFile: File | null = null;

  constructor(
    private dialogRef: MatDialogRef<UplodResultComponent>,
    private marksService: ResultService
  ) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') { // Example: Excel file type
        this.selectedFile = file;
      } else {
        console.warn('Invalid file type');
      }
    }
  }
  
  onSubmit() {
    if (this.selectedFile) {
      this.marksService.uploadResults(this.selectedFile).subscribe(
        response => {
          const arrayBuffer = response;
          const uint8Array = new Uint8Array(arrayBuffer);
          const blob = new Blob([uint8Array], { type: 'application/octet-stream' });
          const fileReader = new FileReader();
          fileReader.onload = () => {
            const fileContent = fileReader.result as string;
            console.log('File content:', fileContent);
          };
          fileReader.readAsText(blob);
        },
        error => {
          console.error('Error uploading the file:', error);
        }
      );
    } else {
      console.warn('No file selected for upload');
    }
  }
}
