import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isVisible: boolean;

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
    const mainNav = document.getElementById('js-menu');
    const navBarToggle = document.getElementById('js-navbar-toggle');
    navBarToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

  }

  openModal() {
    this.isVisible = true;
    const dialogRef = this.dialog.open(ContactComponent, {hasBackdrop: false});
    dialogRef.afterClosed().subscribe(result => {
      this.isVisible = false;
      console.log('cancelled');
    });
  }

}

