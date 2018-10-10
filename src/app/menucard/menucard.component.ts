import { Component, OnInit, ViewChild, ElementRef, ViewChildren} from '@angular/core';
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
  @ViewChildren('linkRef') linkRefs;

  constructor(fb: FormBuilder) {

  }

  ngOnInit() {
  }

  expandItem(index, itemNo) {
    this.listindex = itemNo;
  }

  closeExpand(i) {
    this.listindex = -1;
  }

  scrollToSection(scrollSection) {
    const el = document.getElementById(scrollSection);
    el.scrollIntoView({ behavior: 'instant', block: 'start' });
    window.scrollBy(0, -80);
  }

}
