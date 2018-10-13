import { Component, OnInit, ViewChild, ElementRef, ViewChildren, TemplateRef} from '@angular/core';
import { shoppingList } from '../../assets/data/cartList';
import { ShopListTypes } from '../../assets/data/cartList';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SharedService} from '../shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.scss']
})
export class MenucardComponent implements OnInit {

  isChecked: boolean;

  shoppingListItems: ShopListTypes[] = shoppingList;
  listindex: any;
  eachItem: any;
  PizzaSizeAmount: number;
  selectedPizzaSize: any;
  selectedExtraPrice: any;
  totalAmount: number;
  quantity = 1;
  addCartList = [];
  extraAmountSum = [];
  itemQuantity: number;
  itemTotalAmount = 0;
  selectionModalRef: BsModalRef;

  cartTotalAmount = [];
  cartTotalQuantity = [];

  dropdownList = [];
  dropdownSettings = {};

  viewCheckoutList = [];

  selectionConfig = {
    ignoreBackdropClick: false,
    class: 'modal-lg'
  };

  @ViewChildren('linkRef') linkRefs;

  constructor(fb: FormBuilder, private shared: SharedService, private modalService: BsModalService) {

  }

  ngOnInit() {

  }

  expandItem(item, itemNo) {
    this.quantity = 1;
    this.eachItem = item;
    this.listindex = itemNo;
    this.selectedPizzaSize = this.eachItem.itemExtraOptionsizes.sizes[0].name;
    this.selectedExtraPrice = this.eachItem.itemExtraOptionPrice.prices[0].name;
    this.PizzaSizeAmount = this.eachItem.itemExtraOptionsizes.sizes[0].amount;
    this.totalAmount = this.eachItem.itemExtraOptionsizes.sizes[0].amount + this.eachItem.itemExtraOptionPrice.prices[0].amount;
    this.shared.updatedAmount(this.totalAmount);
  }

  checkExtraOptions(checkeditem, checked) {

    if (checked !== 'noevent') {
      this.isChecked = checked.target.checked;
    }

    if (checkeditem === 'notupdate') {
      this.eachItem.itemExtraOptionsizes.sizes.forEach(item => {
        if (item.name === this.selectedPizzaSize) {
          this.totalAmount = item.amount;
          this.shared.updatedAmount(item.amount);
        }
      });
    } else if (this.isChecked === true) {
      this.eachItem.itemExtraOptionPrice.prices.forEach(item => {
        const value = this.shared.updateAmountValue.getValue();
        if (item.id === checkeditem.id) {
         this.totalAmount = value + checkeditem.amount;
          this.shared.updatedAmount(this.totalAmount);
        }
      });
    } else if (this.isChecked === false) {
      this.eachItem.itemExtraOptionPrice.prices.forEach(item => {
        const value = this.shared.updateAmountValue.getValue();
        if (item.id === checkeditem.id) {
         this.totalAmount = value - checkeditem.amount;
          this.shared.updatedAmount(this.totalAmount);
        }
      });
    }
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

  closeExpand() {
    this.listindex = -1;
  }

  addToCart() {
    this.closeExpand();

    const data = {
      // ItemDetails: this.eachItem,
      itemName: this.eachItem.itemName,
      itemNo: this.eachItem.itemNo,
      quantity: this.quantity,
      itemtotalamount: this.totalAmount
    };

    this.cartTotalAmount.push(data.itemtotalamount);
    this.cartTotalQuantity.push(data.quantity);

    this.itemTotalAmount = this.cartTotalAmount.reduce((a, b) => {
      return a + b;
    });

    this.itemQuantity = this.cartTotalQuantity.reduce((a, b) => {
      return a + b;
    });

    this.addCartList.push(data);

   /*  const result = [];

this.addCartList.forEach(function(obj) {
  const id = obj.itemNo;
  if (!this[id]) {
    result.push(this[id] = obj);
  } else {
   this[id].quantity += obj.quantity;
    this[id].itemtotalamount += obj.itemtotalamount;
  }
}, Object.create(null));

console.log(result); */


const result = [];
const grouped = {};

    this.addCartList.forEach(function (obj) {
      const id = obj.itemNo;
      if (!grouped[id]) {
        const groupedItem = Object.keys(obj).reduce(function (acc, k) { acc[k] = obj[k]; return acc; }, {});
        result.push(grouped[id] = groupedItem);
      } else {
        grouped[id].quantity += obj.quantity;
        grouped[id].itemtotalamount += obj.itemtotalamount;
      }
    }, Object.create(null));

this.viewCheckoutList = result;
console.log(this.viewCheckoutList);

  }

  scrollToSection(scrollSection) {
    const el = document.getElementById(scrollSection);
    el.scrollIntoView({ behavior: 'instant', block: 'start' });
    window.scrollBy(0, -80);
  }

  openCart(template: TemplateRef<any>) {
    this.selectionModalRef = this.modalService.show(template, this.selectionConfig);
  }

}
