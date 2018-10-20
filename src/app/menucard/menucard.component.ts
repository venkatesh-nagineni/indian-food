import { Component, OnInit, ViewChild, ElementRef, ViewChildren, TemplateRef, ViewEncapsulation  } from '@angular/core';
import { shoppingList } from '../../assets/data/cartList';
import { ShopListTypes } from '../../assets/data/cartList';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatDialog } from '@angular/material';
import {Angebotetypes} from '../../assets/data/cartList';
import {MatSnackBar} from '@angular/material';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.scss'],
  encapsulation: ViewEncapsulation.None
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
  itemQuantity = 0;
  totalAmountOnHeader = 0;
  selectionModalRef: BsModalRef;
  extraModalref: BsModalRef;
  checkoutaddressRef: BsModalRef;
  extras = [];
  data: any;
  decrementdisable = 1;

  selectionConfig = {
    ignoreBackdropClick: false,
    class: 'modal-lg'
  };

  extraConfig = {
    ignoreBackdropClick: false,
    class: 'modal-dialog-centered'
  };

  @ViewChildren('linkRef') linkRefs;

  constructor(private cartservice: CartService, fb: FormBuilder, private shared: SharedService, private modalService: BsModalService, private dialog: MatDialog, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.shared.angeboteitem.subscribe((data: Angebotetypes) => {
      if (Object.keys(data).length !== 0) {
        const angeboteData = {
          itemName: data.name,
          itemNo: data.id,
          quantity: 1,
          itemtotalamount: data.price,
        };
        this.addCartList.push(angeboteData);
        this.itemQuantity += 1;
        this.totalAmountOnHeader += angeboteData.itemtotalamount;
        this.openSnackBar('1 item was added successfully', 'View cart');
      }
    });
  }

  UncheckAll() {
    const w = document.getElementsByTagName('input');
    for (let i = 0; i < w.length; i++) {
      if (w[i].type === 'checkbox') {
        w[i].checked = false;
      }
    }
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
          console.log(item);
          this.totalAmount = item.amount;
          this.shared.updatedAmount(item.amount);
          this.UncheckAll();
          this.quantity = 1;
        }
      });
    } else if (this.isChecked === true) {
      this.eachItem.itemExtraOptionPrice.prices.forEach(item => {
        if (item.id === checkeditem.id) {
          const value = this.shared.updateAmountValue.getValue();
          this.totalAmount = value + checkeditem.amount;
          this.shared.updatedAmount(this.totalAmount);
          this.extras.push(checkeditem);
          const amount = this.shared.updateAmountValue.getValue();
          this.totalAmount = amount * this.quantity;
        }
      });
    } else if (this.isChecked === false) {
      this.eachItem.itemExtraOptionPrice.prices.forEach(item => {
        if (item.id === checkeditem.id) {
          const value = this.shared.updateAmountValue.getValue();
          this.totalAmount = value - checkeditem.amount;
          this.shared.updatedAmount(this.totalAmount);
          this.extras = this.extras.filter(x => x.id !== checkeditem.id);
          const amount = this.shared.updateAmountValue.getValue();
          this.totalAmount = amount * this.quantity;
        }
      });
    }
  }

  incrementItem() {
    this.quantity++;
    const amount = this.shared.updateAmountValue.getValue();
    this.totalAmount = amount * this.quantity;
    this.shared.updateCartAmount(this.totalAmount);
  }

  decrementItem() {
    this.quantity--;
    const amount = this.shared.updateAmountValue.getValue();
    this.totalAmount = amount * this.quantity;
    this.shared.updateCartAmount(this.totalAmount);
  }

  closeExpand() {
    this.listindex = -1;
  }

  addToCart() {
    const data = {
      itemName: this.eachItem.itemName,
      itemNo: this.eachItem.itemNo,
      quantity: this.quantity,
      itemtotalamount: this.totalAmount,
      extras: this.extras,
      pizzaSize: this.selectedPizzaSize
    };

    this.itemQuantity += this.quantity;

    this.addCartList.push(data);

    this.totalAmountOnHeader += this.totalAmount;

    this.extras = [];
    this.closeExpand();

  }

  scrollToSection(scrollSection) {
    const el = document.getElementById(scrollSection);
    el.scrollIntoView({ behavior: 'instant', block: 'start' });
    window.scrollBy(0, -80);
  }

  openCart(template: TemplateRef<any>) {
    this.selectionModalRef = this.modalService.show(template, this.selectionConfig);
  }

  cartDecrement(actionitem, index) {
    this.addCartList.forEach(item => {
      if (item.itemNo === actionitem.itemNo) {
        const eachitemprice = this.addCartList[index].itemtotalamount / actionitem.quantity;
        this.addCartList[index].itemtotalamount -= eachitemprice;
        this.addCartList[index].quantity -= 1;
        this.totalAmount -= eachitemprice;
        this.totalAmountOnHeader -= eachitemprice;
        this.itemQuantity -= 1;
        this.decrementdisable = actionitem.quantity;
      }
    });
  }

  cartIncrement(actionitem, index) {
    console.log(actionitem, index);
    this.addCartList.forEach(item => {
      if (item.itemNo === actionitem.itemNo) {
        const eachitemprice = this.addCartList[index].itemtotalamount / actionitem.quantity;
        this.addCartList[index].itemtotalamount += eachitemprice;
        this.addCartList[index].quantity += 1;
        this.totalAmount += eachitemprice;
        this.totalAmountOnHeader += eachitemprice;
        this.itemQuantity += 1;
        this.decrementdisable = actionitem.quantity;
      }
    });
  }

  openInfoText(templateNested, infotext) {
    this.extraModalref = this.modalService.show(templateNested, this.extraConfig);
    this.data = infotext;
  }


  cartDelete(actionitem, index) {
    this.addCartList.splice(index, 1);
    this.totalAmount -= actionitem.itemtotalamount;
    this.totalAmountOnHeader -= actionitem.itemtotalamount;
    this.itemQuantity -= actionitem.quantity;
    if (this.itemQuantity === 0) {
      this.selectionModalRef.hide();
    }
  }

  confirmBestellen(template: TemplateRef<any>) {
    this.checkoutaddressRef = this.modalService.show(template, this.selectionConfig);
    this.selectionModalRef.hide();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar'],
    });
    this.snackBar._openedSnackBarRef.onAction().subscribe(data => {
      const el = document.getElementById('matBar');
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
  }

}
