import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.scss']
})
export class InfoTextComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InfoTextComponent>) { }

  ngOnInit() {

   }

  cancelDialog() {
    this.dialogRef.close();
  }
}
