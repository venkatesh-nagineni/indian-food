import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SharedService} from '../shared.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-logout-confirm',
  templateUrl: './logout-confirm.component.html',
  styleUrls: ['./logout-confirm.component.scss']
})
export class LogoutConfirmComponent {

  email: string;

  constructor(
    public dialogRef: MatDialogRef<LogoutConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public shared: SharedService, private snackBar: MatSnackBar) {
      this.email = localStorage.getItem('email');
    }

    onCloseCancel(): void {
    this.dialogRef.close();
  }

  onCloseConfirm() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.shared.checkLogin('');
    this.openSnackBar('Logout successfully', '');
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar'],
    });
  }

}
