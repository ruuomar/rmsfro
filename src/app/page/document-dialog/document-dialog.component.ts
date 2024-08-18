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


    <div mat-dialog-actions class="dialog-actions">
      <button mat-icon-button (click)="onClose()" color="warn" aria-label="Close">
     <mat-icon>close</mat-icon>
      </button>
    </div>


  `,
  styles: [`
    .dialog-actions {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 1;
    }
    .mat-dialog-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
    }
  `]
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

