import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import {InfoTextComponent} from '../info-text/info-text.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-shopitems',
  templateUrl: './shopitems.component.html',
  styleUrls: ['./shopitems.component.scss']
})
export class ShopitemsComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {

  }

  openInfoText() {
    const dialogRef = this.dialog.open(InfoTextComponent, {hasBackdrop: false});
    dialogRef.afterClosed().subscribe(result => {
      console.log('cancelled');
    });
  }


}
