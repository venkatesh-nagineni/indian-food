import { Component, OnInit } from '@angular/core';
import { shoppingList } from '../../assets/data/cartList';
import { ShopListTypes } from '../../assets/data/cartList';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.scss']
})
export class MenucardComponent implements OnInit {

  hello: boolean;
  shoppingListItems: ShopListTypes[] = shoppingList;
  collapse: boolean;
  listindex: any;

  constructor(fb: FormBuilder) {

  }

  ngOnInit() {
  }

  expandItem(index) {
    this.listindex = index;
  }

  closeExpand(i) {
    this.listindex = -1;
  }

}
