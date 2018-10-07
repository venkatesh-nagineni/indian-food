import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
