import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {CartService} from '../cart.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstFormGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<ContactComponent>, private _formBuilder: FormBuilder, public cart: CartService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      message: ['',  Validators.required],
    });
  }

  sendMail() {
    if (this.firstFormGroup.invalid) {
      this.validateAllFormFields(this.firstFormGroup);
    } else {
      this.cart.contactMail(this.firstFormGroup.value).then((res: any) => {
        if (res.success === true) {
          this.openSnackBar(res.message, '');
          this.dialogRef.close();
        } else {
          this.openSnackBar(res.message, '');
        }
      }, (err) => {
        this.openSnackBar('Server Error! Please try again after some time', '');
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar'],
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
