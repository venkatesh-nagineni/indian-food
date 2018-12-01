import { Component, OnInit, ViewChild } from '@angular/core';
import {SharedService} from '../shared.service';
import {Angebotetypes} from '../../assets/data/cartList';
import {CartService} from '../cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import {PizzaAngeboteSelectionComponent} from '../pizza-angebote-selection/pizza-angebote-selection.component';
interface AngeboteResponseTypes {
  data: Array<Object>;
  imgData: Array<Object>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  angeboteList: any;
  angeboteImg: any;
  slide1List: any;
  slide2List: any;

  constructor(public dialog: MatDialog, private shared: SharedService, private service: CartService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.spinner.show();
    this.service.getAngeboteHome().then((res: AngeboteResponseTypes) => {
      // this.spinner.hide();
      this.angeboteList = res.data;
      this.angeboteImg = res.imgData;
      this.slide1List = this.angeboteList.slice(0, 3);
      this.slide2List = this.angeboteList.slice(3, 6);
    });
    /* setTimeout(() => {
      this.spinner.hide();
    }, 10000); */
  }

  afterChange(slide) {
    console.log(slide);
  }

  angeboteToCart(item: Angebotetypes) {
    if (item.AngeboteNo === 'Angebote 1') {
      const dialogRef = this.dialog.open(PizzaAngeboteSelectionComponent, {
        width: '300px',
        data: item
      });
      dialogRef.afterClosed().subscribe((data) => {
        if (data) {
          this.shared.angeboteupdate(data.selectedPizzas);
        }
      });
    } else {
      this.shared.angeboteupdate(item);
    }
  }

}
