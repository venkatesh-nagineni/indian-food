import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})
export class ForgotpwdComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ForgotpwdComponent>) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
