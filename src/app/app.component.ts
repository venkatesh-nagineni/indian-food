import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ContactComponent} from './contact/contact.component';
import {Router} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {SharedService} from './shared.service';
import {LogoutConfirmComponent} from './logout-confirm/logout-confirm.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isContactVisible: boolean;
  isLoginVisible: boolean;
  disableMenu: boolean;
  disablePointer = false;
  @ViewChild('onlinebestellen') onlinebestellen: ElementRef;
  @ViewChild('navhead') nav: ElementRef;
  homeSection = true;
  onlineSection = true;
  adminSection = false;
  disableHeader = true;
  innerwidth: any;
  hidefooter: boolean;
  isTokenValid: string;
  isLoggedIn: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerwidth = window.innerWidth;
}

  constructor(private dialog: MatDialog, private router: Router, public sharedService: SharedService) {
    this.sharedService.isLogin.subscribe(val => {
      if (val) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  ngOnInit() {
    const mainNav = document.getElementById('js-menu');
    const navBarToggle = document.getElementById('js-navbar-toggle');
    navBarToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
    this.innerwidth = window.innerWidth;
    this.isTokenValid = localStorage.getItem('token');
    if (this.isTokenValid) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    // this.nav.nativeElement.style.background = 'linear-gradient(90deg, rgb(167, 155, 155) 0%, rgba(39,83,91,0.9472163865546218) 60%)';
  }

  logOut() {
    const dialogRef = this.dialog.open(LogoutConfirmComponent, {
      width: '600px',
    });
    const mainNav = document.getElementById('js-menu');
    if (this.innerwidth < 728) {
      mainNav.classList.toggle('active');
    }

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
    const dialogRef = this.dialog.open(UserloginComponent, { hasBackdrop: false, panelClass: 'dialogclass' });
    this.disablePointer = true;
    this.disableMenu = true;
    const mainNav = document.getElementById('js-menu');
    if (this.innerwidth < 728) {
      mainNav.classList.toggle('active');
    }
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
      const mainNav = document.getElementById('js-menu');
      if (this.innerwidth < 728) {
        mainNav.classList.toggle('active');
      }
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

