import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../../pages/add-user/add-user.component';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.css'
})
export class AddUserDialogComponent implements OnInit {
  constructor(private dialog:MatDialog){}
  ngOnInit(): void {}
  openRegisterDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '600px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
      }
    });
}
}
