import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-result-dialog',
  templateUrl: './add-result-dialog.component.html',
  styleUrl: './add-result-dialog.component.css'
})
export class AddResultDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { marks: number }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
