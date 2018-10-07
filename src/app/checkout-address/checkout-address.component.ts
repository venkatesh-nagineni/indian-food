import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.css']
})
export class CheckoutAddressComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this.firstStep();
    this.secondFormGroup = this.secondStep();
  }

  firstStep() {
    return new FormGroup({
      firstName: new FormControl()
    });
  }

  secondStep() {
    return new FormGroup({
      lastName: new FormControl()
    });
  }

  ngOnInit() {
  }

}
