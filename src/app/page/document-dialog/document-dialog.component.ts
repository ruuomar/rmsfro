import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-document-dialog',
  template: `
    <h1 mat-dialog-title>Document</h1>
    <div mat-dialog-content>
      <iframe [src]="safeUrl" frameborder="0" style="border: none; width: 100%; height: 80vh;"></iframe>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()" color="warn">Close</button>
    </div>
  `
})
export class DocumentDialogComponent {
  safeUrl: SafeResourceUrl;

  constructor(
    private dialogRef: MatDialogRef<DocumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { url: string },
    private sanitizer: DomSanitizer
  ) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
