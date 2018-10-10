import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-extra-options',
  templateUrl: './extra-options.component.html',
  styleUrls: ['./extra-options.component.scss']
})
export class ExtraOptionsComponent implements OnInit {

  selectedPizzaSize: any;
  selectedExtraPrice: any;
  PizzaSizeAmount: any;
  pizzaExtraAmount: any;
  TotalAmount: any;
  quantity = 1;
  finalAmount: any;


  constructor(public dialogRef: MatDialogRef<ExtraOptionsComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private shared: SharedService) {
    this.selectedPizzaSize = this.data.itemExtraOptionsizes.sizes[0].value;
    this.selectedExtraPrice = this.data.itemExtraOptionPrice.prices[0].value;
  }

  ngOnInit() {
    this.TotalAmount = this.data.itemExtraOptionsizes.sizes[0].amount + this.data.itemExtraOptionPrice.prices[0].amount;
    this.shared.updatedAmount(this.TotalAmount);
  }

  cancelDialog() {
    this.dialogRef.close();
  }

  conformAmount() {
    this.data.itemExtraOptionsizes.sizes.forEach(item => {
      if (item.value === this.selectedPizzaSize) {
        this.PizzaSizeAmount = item.amount;
      }
    });

    this.data.itemExtraOptionPrice.prices.forEach(item => {
      if (item.value === this.selectedExtraPrice) {
        this.pizzaExtraAmount = item.amount;
      }
    });

    const data =  [
      {
        extrasizeName: this.selectedPizzaSize,
        extrasizeAmount: this.PizzaSizeAmount
      },
      {
        extrasizeName: this.selectedExtraPrice,
        extrasizeAmount: this.pizzaExtraAmount
      },
    ];

    const sumOfAmount = data.reduce((a, b) => {
      return a.extrasizeAmount + b.extrasizeAmount;
    });

    this.shared.updatedAmount(sumOfAmount);

    this.shared.updateAmountValue.subscribe(value => {
      this.TotalAmount = value;
      this.quantity = 1;
    });
  }

  subtract() {
    this.quantity -= 1;
    this.shared.updateAmountValue.subscribe(value => {
      this.TotalAmount = value * this.quantity;
    });
  }

  add() {
    this.quantity += 1;
    this.shared.updateAmountValue.subscribe(value => {
      this.TotalAmount = value * this.quantity;
    });
  }

  CheckoutItem() {
    this.dialogRef.close({data: this.TotalAmount});
  }

}
