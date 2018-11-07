import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CartService} from '../cart.service';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})
export class ForgotpwdComponent implements OnInit {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  email: string;

  constructor(public dialogRef: MatDialogRef<ForgotpwdComponent>, public cartService: CartService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  forgotPwd(email) {
    this.cartService.forgotPwd(email).then((res: any) => {
      console.log(res);
      if (res.success === true) {
        this.openSnackBar(res.message, '');
      } else {
        this.openSnackBar('email not found!', '');
      }
    }, (err) => {
      this.openSnackBar('Server error!', '');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar'],
    });
  }

}
