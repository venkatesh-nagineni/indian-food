import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {CartService} from '../cart.service';
import { ForgotpwdComponent } from '../forgotpwd/forgotpwd.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userDetailForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  show: boolean;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, public dialog: MatDialog, public _formBuilder: FormBuilder, public snackBar: MatSnackBar, public cartService: CartService) { }

  showHidePassword() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.userDetailForm = this._formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }

  senduserData() {
    if (this.userDetailForm.invalid) {
      this.openSnackBar('Please fill out all required fields', '');
      this.validateAllFormFields(this.userDetailForm);
    } else if (this.userDetailForm.get('password').value !== this.userDetailForm.get('confirmPassword').value) {
      this.openSnackBar('Password did not match', '');
    } else {
      const data = this.userDetailForm.value;
      data.trusted = true;
      data.token = '';
      data.role = 'user';
      this.cartService.sendRegistrationData(data).then((res: any) => {
        if (res.success === true) {
          this.openSnackBar('Registered successfully. Please proceed to log in', '');
          this.dialogRef.close();
        } else {
          this.openSnackBar('Registration failed!', '');
        }
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

  forgotpwd() {
    const dialogRef = this.dialog.open(ForgotpwdComponent, { hasBackdrop: false });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  back() {
    this.dialogRef.close();
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
