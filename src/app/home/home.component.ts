import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {Angebotetypes} from '../../assets/data/cartList';
import {CartService} from '../cart.service';

export class AngeboteResponseTypes {
  data: Array<Object>;
  imgData: Array<Object>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  angeboteList: any;
  angeboteImg: any;

  constructor(private shared: SharedService, private service: CartService) { }

  ngOnInit() {
    this.service.getAngeboteHome().then((res: AngeboteResponseTypes) => {
      this.shared.loading(true);
      this.angeboteList = res.data;
      this.angeboteImg = res.imgData;
    });
  }

  angeboteToCart(item: Angebotetypes) {
    this.shared.angeboteupdate(item);
  }

}
