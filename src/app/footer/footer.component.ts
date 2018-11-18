import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logos = ['payment_0', 'payment_1', 'payment_2', 'payment_4', 'payment_6', 'payment_7'];
  isClassVisible: boolean;
  hover: boolean;
  experience: number;

  constructor(private dialog: MatDialog) { }

ngOnInit() {
  this.experience = (new Date()).getFullYear() - 1992;
}

  openContactModal() {
    const dialogRef = this.dialog.open(ContactComponent, {hasBackdrop: false});
    this.isClassVisible = true;
    dialogRef.afterClosed().subscribe(result => {
      this.isClassVisible = false;
      this.hover = false;
    });
  }

}
