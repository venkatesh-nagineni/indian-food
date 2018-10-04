import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-shopitems',
  templateUrl: './shopitems.component.html',
  styleUrls: ['./shopitems.component.scss']
})
export class ShopitemsComponent implements OnInit {

  /* @HostListener('window:scroll', ['$event'])
  hello() {
    this.navbar = document.getElementById('navbar');
   const number = window.scrollY;
   console.log(number);
    if (number >= 1011) {
      this.navbar.classList.add('sticky');
    } else {
      this.navbar.classList.remove('sticky');
    }
  } */

  constructor() {

  }

  ngOnInit() {

  }



}
