import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StartRatingComponent implements OnInit {

  @Input('rating') rating: number;
  @Input('starCount') starCount = 5;
  @Input('color') color = 'warn';
  @Output() public ratingUpdated = new EventEmitter();

  public snackBarDuration = 2000;
  public ratingArr = [];

  constructor(public snackBar: MatSnackBar) {}


  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating: number) {
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
