import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ContactComponent} from './contact/contact.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {Router} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {SharedService} from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isContactVisible: boolean;
  isLoginVisible: boolean;
  disableMenu: boolean;
  disablePointer = false;
  @ViewChild('onlinebestellen') onlinebestellen: ElementRef;
  homeSection = true;
  onlineSection = true;
  adminSection = false;
  disableHeader = true;

  constructor(private dialog: MatDialog, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    const mainNav = document.getElementById('js-menu');
    const navBarToggle = document.getElementById('js-navbar-toggle');
    navBarToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

  }

  openModal() {
    this.isContactVisible = true;
    const dialogRef = this.dialog.open(ContactComponent, {hasBackdrop: false});
    dialogRef.afterClosed().subscribe(result => {
      this.isContactVisible = false;
    });
  }

  /* openAdminLogin() {
    this.isLoginVisible = true;
    const dialogRef = this.dialog.open(AdminloginComponent, {hasBackdrop: false});
    dialogRef.afterClosed().subscribe(result => {
      this.isLoginVisible = false;
    });
  } */

  openUserLogin() {
    const dialogRef = this.dialog.open(UserloginComponent, {hasBackdrop: false});
    this.disablePointer = true;
    this.disableMenu = true;
    dialogRef.afterClosed().subscribe(result => {
      this.isLoginVisible = false;
      this.disablePointer = false;
      this.disableMenu = false;
      if (result) {
        if (result.valid === true) {
          this.adminSection = true;
          this.homeSection = false;
          this.onlineSection = false;
          this.disablePointer = true;
          this.disableMenu = false;
          this.disableHeader = false;
        }
      }
    });
  }

  navigation(page) {
    if (page === 'online') {
        this.onlinebestellen.nativeElement.scrollIntoView({ behavior: 'auto', block: 'start' });
        this.disableHeader = true;
    }
  }

  home() {
    this.adminSection = false;
    this.homeSection = true;
    this.onlineSection = true;
    this.disablePointer = false;
    this.disableHeader = true;
  }

}

