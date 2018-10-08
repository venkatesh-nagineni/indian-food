import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  disableService: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  toggledisableService (value) {
    this.disableService.next(value);
  }

}

