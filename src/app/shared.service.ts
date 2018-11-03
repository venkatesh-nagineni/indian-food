import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

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
  cartList: BehaviorSubject<Array<Object>> = new BehaviorSubject([]);
  total: BehaviorSubject<number> = new BehaviorSubject(0);
  isLogin: BehaviorSubject<string> = new BehaviorSubject('');
  userDialogCheck: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {

  }

  checkUserDialog(val) {
    this.userDialogCheck.next(val);
  }

  checkLogin(val) {
    this.isLogin.next(val);
  }

  cartListMethod(list) {
    this.cartList.next(list);
  }

  totalAmountinCart(amount) {
    this.total.next(amount);
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

