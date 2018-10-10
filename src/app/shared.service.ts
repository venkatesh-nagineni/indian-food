import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  disableService: BehaviorSubject<boolean> = new BehaviorSubject(false);
  updateAmountValue: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  toggledisableService (value) {
    this.disableService.next(value);
  }

  updatedAmount(value) {
    console.log(value);
    this.updateAmountValue.next(value);
  }


}

