import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  username: any;
  password: any;

  constructor(public dialogRef: MatDialogRef<AdminloginComponent>) { }

  ngOnInit() {

  }

  onNoClick() {
    this.dialogRef.close();
  }

  login(username, password) {
    console.log(username, password);
  }

}
