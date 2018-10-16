import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {angeboteList} from '../../assets/data/cartList';
import {Angebotetypes} from '../../assets/data/cartList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private data: any;
  angeboteList: Angebotetypes[] = angeboteList;

  constructor(private shared: SharedService) { }

  ngOnInit() {

  }

  angeboteToCart(item: Angebotetypes) {
    this.shared.angeboteupdate(item);
  }

}
