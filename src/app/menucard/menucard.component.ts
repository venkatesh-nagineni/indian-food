import { Component, OnInit, ViewChild, ElementRef, ViewChildren, TemplateRef, ViewEncapsulation, Inject, forwardRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatDialog } from '@angular/material';
import { Angebotetypes } from '../../assets/data/cartList';
import { MatSnackBar } from '@angular/material';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenucardComponent implements OnInit {

  @ViewChild(AppComponent) app: AppComponent;

  isChecked: boolean;

  shoppingListItems: any;
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
  disableCart = false;
  disableConfirmBestellen: boolean;

  selectionConfig = {
    ignoreBackdropClick: false,
    class: 'modal-lg'
  };

  extraConfig = {
    ignoreBackdropClick: false,
    class: 'modal-dialog-centered'
  };

  @ViewChildren('linkRef') linkRefs;

  constructor(private cartservice: CartService, fb: FormBuilder, private shared: SharedService, private modalService: BsModalService,
    private dialog: MatDialog, private snackBar: MatSnackBar, public router: Router, @Inject(forwardRef(() => AppComponent)) private _parent: AppComponent,
    private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.spinner.show();
    this.cartservice.getShoppingList().then(response => {
      this.shoppingListItems = response;
      this.spinner.hide();
    });

    this.shared.userDialogCheck.subscribe(val => {
      if (val === true) {
        this.disableCart = false;
      } else {
        this.disableCart = false;
      }
    });

    this.addToCartAngebote();
  }

  addToCartAngebote() {
    this.shared.angeboteitem.subscribe((data: Angebotetypes) => {
      if (Object.keys(data).length !== 0) {
        const angeboteData = {
          itemName: data['AngeboteName'],
          itemNo: data['_id'],
          quantity: 1,
          itemtotalamount: data['AngebotePrice'],
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

  expandItem(item, itemNo, category) {
    this.quantity = 1;
    if (category === 'Pizza') {
      this.eachItem = item;
      this.listindex = itemNo;
      this.totalAmount = this.eachItem.itemPrice;
      if (this.eachItem.itemExtraOptionsizes.sizes.length !== 0) {
        this.selectedPizzaSize = this.eachItem.itemExtraOptionsizes.sizes[0].name;
        this.totalAmount = this.eachItem.itemExtraOptionsizes.sizes[0].amount;
      }

      if (this.eachItem.itemExtraOptionPrice.prices.length !== 0) {
        this.selectedExtraPrice = this.eachItem.itemExtraOptionPrice.prices[0].name;
        // this.PizzaSizeAmount = this.eachItem.itemExtraOptionsizes.sizes[0].amount;
      }

      this.shared.updatedAmount(this.totalAmount);
    } else {
      this.eachItem = item;
      this.listindex = itemNo;
      this.totalAmount = this.eachItem.itemPrice;
      this.shared.updatedAmount(this.totalAmount);
    }
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
    this.disableConfirmBestellen = true;
    const token = localStorage.getItem('token');
    if (!token) {
      this.selectionModalRef.hide();
      this._parent.openUserLogin();
      this.disableCart = true;
    } else {
      this.cartservice.checkTrustedUser(token).then((res: any) => {
        if (res.userdata[0].trusted === true) {
          this.disableCart = false;
          this.shared.cartListMethod(this.addCartList);
          this.shared.totalAmountinCart(this.totalAmountOnHeader);
          this.checkoutaddressRef = this.modalService.show(template, this.selectionConfig);
          this.selectionModalRef.hide();
          this.disableConfirmBestellen = false;
        } else {
          this.openSnackBar('user blocked! Please contact admin', '');
          this.selectionModalRef.hide();
        }
      }, (err) => {
        console.log(err);
      });
    }
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

/*   ngOnDestroy() {
    this.shared.angeboteitem.unsubscribe();
  } */

}
