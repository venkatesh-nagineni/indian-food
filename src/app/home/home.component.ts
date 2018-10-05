import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '500px',
          height: '350px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
      {
          small: '../../assets/images/chicken.jpg',
          medium: '../../assets/images/chicken.jpg',
          big: '../../assets/images/chicken.jpg'
      },
      {
          small: '../../assets/images/salat.jpg',
          medium: '../../assets/images/salat.jpg',
          big: '../../assets/images/salat.jpg'
      },
      {
          small: '../../assets/images/samosa.jpg',
          medium: '../../assets/images/samosa.jpg',
          big: '../../assets/images/samosa.jpg'
      },
      {
        small: '../../assets/images/chicken.jpg',
        medium: '../../assets/images/chicken.jpg',
        big: '../../assets/images/chicken.jpg'
    },
    {
        small: '../../assets/images/salat.jpg',
        medium: '../../assets/images/salat.jpg',
        big: '../../assets/images/salat.jpg'
    },
    {
        small: '../../assets/images/samosa.jpg',
        medium: '../../assets/images/samosa.jpg',
        big: '../../assets/images/samosa.jpg'
    }
  ];
  }

}
