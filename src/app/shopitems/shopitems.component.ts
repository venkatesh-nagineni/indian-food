import { Component, OnInit, AfterViewInit, HostListener, TemplateRef } from '@angular/core';
import { InfoTextComponent } from '../info-text/info-text.component';
import { MatDialog } from '@angular/material';
import { shoppingList } from '../../assets/data/cartList';
import { ShopListTypes } from '../../assets/data/cartList';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-shopitems',
  templateUrl: './shopitems.component.html',
  styleUrls: ['./shopitems.component.scss']
})
export class ShopitemsComponent implements OnInit {

  shoppingListItems: ShopListTypes[] = shoppingList;
  itemAmount = [];
  totalAmount = 0;
  numberOfItems = 0;
  checkOutList = [];
  viewCheckoutList = [];
  totoalCheckoutAmount = 0;
  modalRef: BsModalRef;

  config = {
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

/*   Object.assign({}, { class: 'gray modal-lg' })

 */  constructor(private dialog: MatDialog, private modalService: BsModalService) {

  }

  ngOnInit() {
  }

  openInfoText(infotext) {
    const dialogRef = this.dialog.open(InfoTextComponent, { hasBackdrop: false, data: infotext, panelClass: 'custom-modalbox' });
    dialogRef.afterClosed().subscribe(result => {
      console.log('cancelled');
    });
  }

  addToCart(item) {
    this.itemAmount.push(item.itemPrice);
    this.numberOfItems += 1;
    this.totalAmount = this.itemAmount.reduce((a, b) => {
      return a + b;
    });

    const itemToTheCart = { itemNo: item.itemNo, itemName: item.itemName, itemPrice: item.itemPrice };
    this.checkOutList.push(itemToTheCart);
  }

  checkOutCart(template: TemplateRef<any>) {
    this.viewCheckoutList = this.checkOutList.reduce((a, b) => {
      const i = a.findIndex(x => x.itemName === b.itemName);
      return i === -1 ? a.push({ itemName: b.itemName, times: 1, amount: b.itemPrice, singleItemPrice: b.itemPrice }) : (a[i].amount += b.itemPrice, a[i].times++ , a[i].singleItemPrice = b.itemPrice), a;
    }, []);

    console.log(this.viewCheckoutList);

    this.modalRef = this.modalService.show(template, this.config);
  }

  addItems(actionIndex) {
    this.viewCheckoutList.forEach((item, index) => {
      if (actionIndex === index) {
        this.viewCheckoutList[actionIndex].times = this.viewCheckoutList[actionIndex].times + 1;
        this.viewCheckoutList[actionIndex].amount += this.viewCheckoutList[actionIndex].singleItemPrice;
        this.totalAmount += this.viewCheckoutList[actionIndex].singleItemPrice;
        this.numberOfItems += 1;
      }
    });
  }

  subtractItems(actionIndex, activeItem) {
    if (activeItem.times > 0) {
      this.viewCheckoutList.forEach((item, index) => {
        if (actionIndex === index) {
            this.viewCheckoutList[actionIndex].times = this.viewCheckoutList[actionIndex].times - 1;
            this.viewCheckoutList[actionIndex].amount -= this.viewCheckoutList[actionIndex].singleItemPrice;
            this.totalAmount -= this.viewCheckoutList[actionIndex].singleItemPrice;
            this.numberOfItems -= 1;
          }
      });
    }
  }

  deleteItems(actionIndex, activeItem) {
    this.viewCheckoutList.splice(actionIndex, 1);
    this.totalAmount -= activeItem.amount;
    this.numberOfItems -= activeItem.times;
  }



  /* addOrRemoveItems(action, actionIndex, activeItem) {
    if (action === 'add') {
      this.viewCheckoutList.forEach((item, index) => {
        if (actionIndex === index) {
          this.viewCheckoutList[actionIndex].times = this.viewCheckoutList[actionIndex].times + 1;
          this.viewCheckoutList[actionIndex].amount += this.viewCheckoutList[actionIndex].singleItemPrice;
          this.totalAmount += this.viewCheckoutList[actionIndex].singleItemPrice;
          this.numberOfItems += 1;
        }
      });
    } else if (action === 'subtract') {
      this.viewCheckoutList.forEach((item, index) => {
        if (actionIndex === index) {
          if (this.viewCheckoutList[actionIndex].times !== 0) {
            this.viewCheckoutList[actionIndex].times = this.viewCheckoutList[actionIndex].times - 1;
            this.viewCheckoutList[actionIndex].amount -= this.viewCheckoutList[actionIndex].singleItemPrice;
            this.totalAmount -= this.viewCheckoutList[actionIndex].singleItemPrice;
            this.numberOfItems -= 1;
          }
          if (this.viewCheckoutList[actionIndex].times === 0) {
            this.viewCheckoutList.splice(actionIndex, 1);
          }
        }
      });
    } else if (action === 'delete') {
      this.viewCheckoutList.splice(actionIndex, 1);
      this.totalAmount -= activeItem.amount;
      this.numberOfItems -= activeItem.times;
    }
  } */
}
