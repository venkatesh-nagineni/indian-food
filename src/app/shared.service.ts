import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  disableService: BehaviorSubject<boolean> = new BehaviorSubject(false);
  updateAmountValue: BehaviorSubject<number> = new BehaviorSubject(0);
  itemNo: BehaviorSubject<number> = new BehaviorSubject(0);
  cartQuantity: BehaviorSubject<number> = new BehaviorSubject(0);
  cartTotalAmount: BehaviorSubject<number> = new BehaviorSubject(0);
  angeboteitem: BehaviorSubject<Object> = new BehaviorSubject({});

  constructor() {

  }

  angeboteupdate(item: Object) {
    this.angeboteitem.next(item);
  }

  toggledisableService (value) {
    this.disableService.next(value);
  }

  updatedAmount(value) {
    this.updateAmountValue.next(value);
  }

  updateItemNo(number) {
    this.itemNo.next(number);
  }

  updateCartQuantity(quantity) {
    const addEachQuantity = this.cartQuantity + quantity;
    this.cartQuantity.next(addEachQuantity);
  }

  updateCartAmount(amount) {
    const addEachAmount = this.cartTotalAmount + amount;
    this.cartTotalAmount.next(addEachAmount);
  }

}

