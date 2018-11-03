import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Inject, forwardRef } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {SharedService} from '../shared.service';
import { CartService } from '../cart.service';
import {MatSnackBar} from '@angular/material';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

declare var google;
declare var spherical;
@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutAddressComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  finalCartList: any;
  isOptional = false;
  with5Gap: any;
  isChecked = true;
  paymentchange: any;
  totalAmount: any;
  paymentsvalues: Array<{}>;
  paymentmethod = 'Machine';
  extraDesc: string;
  distance: any;
  amountinCart: any;
  aftersubmit: boolean;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  @ViewChild('timeInput') timeInput: ElementRef;

  constructor(private _formBuilder: FormBuilder, private shared: SharedService, private cartService: CartService, private snackBar: MatSnackBar,
    @Inject(forwardRef(() => AppComponent)) private _parent: AppComponent, public router: Router) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      adresse: ['', Validators.required],
      zip: ['', Validators.required],
      stadt: ['', [Validators.required]],
      etage: [''],
    });

    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phNo: ['', [Validators.required]],
      firmaName: [''],
    });
  }

  paymentvaluechange(value) {
    this.paymentchange = value;
  }

  paymentMethod(event) {
    const method = event.target.defaultValue;
    this.paymentmethod = method;
    if (this.paymentmethod === 'Cash') {
      this.amountinCart = this.shared.total.getValue();
      this.paymentsvalues = [{amount: 'Passand: ' + this.amountinCart + '€'}, {amount: 10 + ' €'}, {amount: 20 + ' €'}, {amount: 50 + ' €'}, {amount: 100 + ' €'}];
      this.paymentchange = this.paymentsvalues[0]['amount'];
    }
  }

  timeevent(time) {
    console.log(time);
    this.isChecked = false;
    this.with5Gap = time.selectedHour.time + ':' + time.selectedMinute.time + ' ' + time.selectedPeriod;
    console.log(this.with5Gap);

  }

  deliverytime(event) {
    if (event.checked === true) {
      this.timeInput.nativeElement.value = '';
    }
  }

  addressnext() {
    this.addresstolatlong();
  }

  addresstolatlong() {
    const geocoder = new google.maps.Geocoder();
    const addresse = ' "' + this.firstFormGroup.get('adresse').value + ',' + this.firstFormGroup.get('zip').value + ',' + this.firstFormGroup.get('stadt').value + '"';
    geocoder.geocode({ 'address': addresse }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const originlat = results[0].geometry.location.lat();
        const originlong = results[0].geometry.location.lng();
        const destinationlat = 50.02815649999999;
        const destinationlong = 8.878834600000005;
        const p1 = new google.maps.LatLng(originlat, originlong);
        const p2 = new google.maps.LatLng(destinationlat, destinationlong);
        const distance = this.getDistance(p1, p2);
        const km = distance / 1000;
        this.distance = km.toFixed(1) + 'km';
        console.log(this.distance);
      }
    });
  }

  getDistance(p1, p2) {
    const R = 6378137; // Earth’s mean radius in meter
    const dLat = this.rad(p2.lat() - p1.lat());
    const dLong = this.rad(p2.lng() - p1.lng());
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.lat())) * Math.cos(this.rad(p2.lat())) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d; // returns the distance in meter
  }

  rad (x) {
    return x * Math.PI / 180;
  }

  confirmOrder() {
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      this.openSnackBar('Please fill required fields', '');
    } else {
      this.amountinCart = this.shared.total.getValue();
      const userdata = {
        address: this.firstFormGroup.value,
        perosnalinfo: this.secondFormGroup.value,
        paymentmethod: this.paymentmethod,
        paymentChange: this.paymentchange || '',
        deliveryTime: this.with5Gap || 'ASAP',
        extraInfo: this.extraDesc || '',
        distance: this.distance,
        totalamount: this.amountinCart
      };
      this.finalCartList = this.shared.cartList.getValue();
      this.finalCartList.forEach((element, index) => {
        if (element.extras) {
          if (element.extras.length > 1) {
            const extrasmerge = element.extras.map(user => user.name).join(', ');
            this.finalCartList[index].extras = extrasmerge;
          } else if (element.extras.length === 1) {
            const extrasmerge = element.extras[0].name;
            this.finalCartList[index].extras = extrasmerge;
          }
        } else {
            element.extras = '';
        }
      });
      this.cartService.sendmail(this.finalCartList, userdata).then(res => {
        this.aftersubmit = true;
        this.openSnackBar('Order placed successfully', '');
        location.reload();
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['red-snackbar'],
    });
  }

}
