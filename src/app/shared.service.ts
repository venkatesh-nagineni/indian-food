import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  disableService: BehaviorSubject<boolean> = new BehaviorSubject(false);
  updateAmountValue: BehaviorSubject<number> = new BehaviorSubject(0);
  itemNo: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  toggledisableService (value) {
    this.disableService.next(value);
  }

  updatedAmount(value) {
    this.updateAmountValue.next(value);
  }

  updateItemNo(number) {
    this.itemNo.next(number);
  }


}

