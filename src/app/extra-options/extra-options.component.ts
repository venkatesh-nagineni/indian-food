import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-extra-options',
  templateUrl: './extra-options.component.html',
  styleUrls: ['./extra-options.component.scss']
})
export class ExtraOptionsComponent implements OnInit {

  selectedPizzaSize: any;
  selectedExtraPrice: any;

  constructor(public dialogRef: MatDialogRef<ExtraOptionsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedPizzaSize = this.data.itemExtraOptionsizes.sizes[0];
    this.selectedExtraPrice = this.data.itemExtraOptionPrice.prices[0];
  }

  ngOnInit() {
  }

  cancelDialog() {
    const data = {
      extraPizzaSize: this.selectedPizzaSize,
      extraPizzaPrice: this.selectedExtraPrice
    };
    this.dialogRef.close({data: data});
  }

}
