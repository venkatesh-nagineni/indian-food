import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RegisterComponent} from '../register/register.component';
import {ForgotpwdComponent} from '../forgotpwd/forgotpwd.component';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<UserloginComponent>) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  register() {
    const dialogRef = this.dialog.open(RegisterComponent, {hasBackdrop: false});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  forgotpwd() {
    const dialogRef = this.dialog.open(ForgotpwdComponent, {hasBackdrop: false});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  login(username, password) {
    console.log(username, password);
    let valid = false;
    if (username === 'admin' && password === 'admin') {
      valid = true;
    }

    if (valid === true) {
      this.dialogRef.close({valid});
    }
  }

}
