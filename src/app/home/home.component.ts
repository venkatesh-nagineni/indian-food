import { Component, OnInit, ViewChild } from '@angular/core';
import {SharedService} from '../shared.service';
import {Angebotetypes} from '../../assets/data/cartList';
import {CartService} from '../cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
export class AngeboteResponseTypes {
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

  constructor(private shared: SharedService, private service: CartService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.spinner.show();
    this.service.getAngeboteHome().then((res: AngeboteResponseTypes) => {
      // this.spinner.hide();
      this.angeboteList = res.data;
      this.angeboteImg = res.imgData;
    });
    /* setTimeout(() => {
      this.spinner.hide();
    }, 10000); */
  }

  angeboteToCart(item: Angebotetypes) {
    this.shared.angeboteupdate(item);
  }

}
