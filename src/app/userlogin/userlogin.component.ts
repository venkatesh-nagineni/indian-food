import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import { ForgotpwdComponent } from '../forgotpwd/forgotpwd.component';
import { MatSnackBar } from '@angular/material';
import { CartService } from '../cart.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  email: string;
  password: string;
  ErrorMessage = false;
  response: boolean;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  show: boolean;

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<UserloginComponent>, public snackBar: MatSnackBar, public cartService: CartService, public sharedService: SharedService) {
    this.show = false;
  }

  ngOnInit() {
  }

  showHidePassword() {
    this.show = !this.show;
  }

  onNoClick() {
    this.dialogRef.close();
    this.sharedService.checkUserDialog(true);
  }

  register() {
    const dialogRef = this.dialog.open(RegisterComponent, { hasBackdrop: false });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  forgotpwd() {
    const dialogRef = this.dialog.open(ForgotpwdComponent, { hasBackdrop: false });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  login(email, password) {
    this.response = true;
    let valid = false;
    if (!email || !password) {
      this.ErrorMessage = true;
      this.response = false;
      this.openSnackBar('Das eingegebene Benutzer-ID/Passwort ist nicht korrekt', '');
    } else {
      const data = { email: email, password: password };
      this.cartService.loginUser(data).then((response: any) => {
        this.response = false;
        if (response.success === true) {
          if (response.result[0].role === 'user') {
            this.openSnackBar('Logged in successfully', '');
            localStorage.setItem('token', response.token);
            localStorage.setItem('email', response.result[0].email);
            this.dialogRef.close();
            this.ErrorMessage = false;
            this.sharedService.checkLogin(response.token);
            this.sharedService.checkUserDialog(false);
          } else if (response.result[0].role === 'admin') {
            this.openSnackBar('Logged in successfully', '');
            valid = true;
            this.dialogRef.close({ valid });
          } else {
            this.ErrorMessage = true;
            this.openSnackBar('Das eingegebene Benutzer-ID/Passwort ist nicht korrekt', '');
          }
        } else {
          this.ErrorMessage = true;
          this.openSnackBar('Das eingegebene Benutzer-ID/Passwort ist nicht korrekt', '');
        }
      }, (err) => {
        this.ErrorMessage = true;
        this.openSnackBar('Das eingegebene Benutzer-ID/Passwort ist nicht korrekt', '');
        this.response = false;
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar'],
    });
  }

}
