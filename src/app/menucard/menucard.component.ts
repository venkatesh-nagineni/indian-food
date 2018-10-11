import { Component, OnInit, ViewChild, ElementRef, ViewChildren} from '@angular/core';
import { shoppingList } from '../../assets/data/cartList';
import { ShopListTypes } from '../../assets/data/cartList';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SharedService} from '../shared.service';

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
  eachItem: any;
  PizzaSizeAmount: number;
  pizzaExtraAmount: number;
  selectedPizzaSize: any;
  selectedExtraPrice: any;
  totalAmount: number;
  quantity = 1;
  addCartList = [];

  @ViewChildren('linkRef') linkRefs;

  constructor(fb: FormBuilder, private shared: SharedService) {

  }

  ngOnInit() {
  }

  expandItem(item, itemNo) {
    this.quantity = 1;
    this.eachItem = item;
    this.listindex = itemNo;
    this.selectedPizzaSize = this.eachItem.itemExtraOptionsizes.sizes[0].value;
    this.selectedExtraPrice = this.eachItem.itemExtraOptionPrice.prices[0].value;
    this.totalAmount = this.eachItem.itemExtraOptionsizes.sizes[0].amount + this.eachItem.itemExtraOptionPrice.prices[0].amount;
    this.shared.updatedAmount(this.totalAmount);
  }

  expandItemAmount() {
    this.eachItem.itemExtraOptionsizes.sizes.forEach(item => {
      if (item.value === this.selectedPizzaSize) {
        this.PizzaSizeAmount = item.amount;
      }
    });
    this.eachItem.itemExtraOptionPrice.prices.forEach(item => {
      if (item.value === this.selectedExtraPrice) {
        this.pizzaExtraAmount = item.amount;
      }
    });
    const extraAmountSum = [this.PizzaSizeAmount, this.pizzaExtraAmount];
    this.totalAmount = extraAmountSum.reduce((a, b) => {
      return a + b;
    });
    this.shared.updatedAmount(this.totalAmount);
  }

  incrementItem() {
    this.quantity ++;
    this.shared.updateAmountValue.subscribe(amount => {
      this.totalAmount = amount * this.quantity;
    });
  }

  decrementItem() {
    this.quantity --;
    this.shared.updateAmountValue.subscribe(amount => {
      this.totalAmount = amount * this.quantity;
    });
  }

  closeExpand(i) {
    this.listindex = -1;
    this.quantity = 1;
  }

  addToCart() {
    const data = [
      {
        ItemDetails: this.eachItem,
        quantity: this.quantity,
        itemtotalamount: this.totalAmount
      }
    ];
    this.addCartList.push(data);
  }

  scrollToSection(scrollSection) {
    const el = document.getElementById(scrollSection);
    el.scrollIntoView({ behavior: 'instant', block: 'start' });
    window.scrollBy(0, -80);
  }

}
