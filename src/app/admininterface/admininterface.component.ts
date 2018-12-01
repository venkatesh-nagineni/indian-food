import { Component, OnInit, ViewEncapsulation, OnDestroy, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CartService } from '../cart.service';
import { MatTabChangeEvent } from '@angular/material';
import {SharedService} from '../shared.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admininterface',
  templateUrl: './admininterface.component.html',
  styleUrls: ['./admininterface.component.scss'],
})
export class AdmininterfaceComponent implements OnInit, OnDestroy {

  mainshoppinglistitems: any;
  radiogroup: any;
  selectedFile: File;
  selectedOfferFile: File;
  categoryid: string;
  adminForm: FormGroup;
  submitted = false;
  url = '';
  extraSizes = [];
  extraPrices = [];
  previewShow = false;
  openformtoadd = false;
  displaynewcategory = false;
  selectedCategoryFile: File;
  categorydishforRemove: any;
  selectedfromlist: string;
  angeboteItems: any;
  selectedAngebote: any;
  angebote: any;
  categoryForRemove: any;
  dishItemsToRemove: any;
  removeCategoryId: any;
  removeDishId: any;
  removeCategory: any;
  categorydishName: any;
  isContainCategoryFile: any;
  isContainOfferFile: any;
  color1 = '#a79b9b';
  color2 = '#27535bf1';

  fullname: string;
  email: string;
  phone: string;
  action: string;
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = [ 'fullname', 'email', 'phone', 'action'];

  extraoptionsizes = {
    itemPlaceholderName: '',
    sizes: [{ id: new Date().valueOf(), size: '', amount: '' }]
  };

  extraoptionprices = {
    itemPlaceholderName: '',
    prices: [{ id: new Date().valueOf(), name: '', amount: '' }]
  };

  previewAngebote = {
    name: '',
    extraInfo: '',
    price: ''
  };

  newCategoryData = { name: '' };

  blockingUser = {email: '', phone: ''};
  colors = {primaryColor: '', secondarycolor: ''};

  constructor(public colorPicker: ColorPickerService, private elementRef: ElementRef, private http: HttpClient, private formBuilder: FormBuilder, private snackBar: MatSnackBar, private cartservice: CartService, public shared: SharedService) {
    this.radiogroup = 'adddish';
  }

  removecategoryChanged(item) {
    this.mainshoppinglistitems.forEach(element => {
      if (item === element.dishType) {
        this.dishItemsToRemove = element.dishItems;
        this.removeCategoryId = element._id;
      }
    });
  }

  removeDishchanged(dish) {
    this.dishItemsToRemove.forEach(item => {
      this.removeDishId = item.itemNo;
    });
  }

  onSubmitRemoveDish() {
    const removeData = {
      catId: this.removeCategoryId,
      itemId: this.removeDishId
    };
    this.cartservice.removeDishItem(removeData).then(res => {
      if (res['success'] === true) {
        this.openSnackBar(res['message'], '');
      } else {
        this.openSnackBar(res['message'], '');
      }
    });
    this.cartservice.getShoppingListOnly().then(response => {
      this.mainshoppinglistitems = response['data'];
      this.removeCategory = '';
      this.categorydishName = '';
    });
  }

  radioChange() {
    this.cartservice.getShoppingListOnly().then(response => {
      this.mainshoppinglistitems = response['data'];
      /* this.mainshoppinglistitems =  response['data'].filter(data => {
        return data.dishItems.length >= 1;
      }); */
    });
  }

  addNewCategory() {
    this.displaynewcategory = true;
    this.categoryid = '';
    this.openformtoadd = false;
    this.cartservice.getShoppingListOnly().then(response => {
      this.mainshoppinglistitems = response['data'];
    });
  }

  submitCategoryData() {
    if (!this.newCategoryData.name || !this.isContainCategoryFile) {
      this.openSnackBar('Please fill all fields', '');
    } else {
      const uploadData = new FormData();
      uploadData.append('image', this.selectedCategoryFile, this.selectedCategoryFile.name);

      let httpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.append('name', this.newCategoryData.name);

      this.http.post('https://mishnmash.de/api/postnewCategoryData/', uploadData, { reportProgress: true, observe: 'events', headers: httpHeaders }).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
         // console.log('upload progress' + Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          this.cartservice.getShoppingListOnly().then(response => {
            this.mainshoppinglistitems = response['data'];
          });
        }
      });
      this.openSnackBar('Category submitted successfully', '');
      this.newCategoryData.name = '';
      this.isContainCategoryFile = '';
    }
  }

  categorychanged(id) {
    this.openformtoadd = false;
    this.displaynewcategory = false;
    this.mainshoppinglistitems.forEach(items => {
      if (items._id === id) {
        this.selectedfromlist = items.dishType;
      }
    });
  }

  adddishform() {
    this.openformtoadd = true;
  }

  oncategoryFileChanged(event) {
    this.selectedCategoryFile = event.target.files[0];
    this.isContainCategoryFile = event.target.files[0].name;
  }

  oncategoryUpload() {
    if (!this.selectedCategoryFile) {
      this.openSnackBar('Please select a file', '');
    } else {
      this.openSnackBar('Uploaded successfully !', '');
    }
  }

  ngOnInit() {
    this.adminForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemShortDescription: [''],
      itemPrice: ['', [Validators.required]],
      // chooseExtraInfo: ['']
    });
    this.cartservice.getShoppingListOnly().then(response => {
      this.mainshoppinglistitems = response['data'];
    });
      this.elementRef.nativeElement.ownerDocument.body.style.background = '#f9f5f1';
  }

  tabChanged(event: MatTabChangeEvent) {
    if (event.index === 1) {
      this.cartservice.getAngebote().then((response: any) => {
        this.angeboteItems = response.data;
        this.angebote = 'Angebote 1';
        this.selectedAngebote = response.data[0]._id;
      });
    }

    if (event.index === 3) {
      this.colors = {primaryColor: '', secondarycolor: ''};
    }

    if (event.index === 4) {
      this.cartservice.getBlockedList().then((data: any) => {
        this.dataSource.data = data.data;
        console.log(this.dataSource);
      }, (error) => {
        console.log(error);
      });
    }
  }

  angeboteselect(angebote) {
    this.angeboteItems.forEach(element => {
      if (element.AngeboteNo === angebote) {
        this.selectedAngebote = element._id;
      }
    });
  }

  submitAngebote() {
    if (this.previewAngebote.price && this.previewAngebote.name && this.previewAngebote.extraInfo && this.isContainOfferFile) {
      this.previewShow = false;
      const uploadData = new FormData();
      uploadData.append('image', this.selectedFile, this.selectedFile.name);

      let headers = new HttpHeaders();
      headers = headers.append('data', this.previewAngebote.extraInfo);
      headers = headers.append('price', this.previewAngebote.price);
      headers = headers.append('id', this.selectedAngebote);
      headers = headers.append('name', this.previewAngebote.name);

      this.http.post('https://mishnmash.de/api/postAngeboteData/', uploadData, { observe: 'events', headers: headers }).subscribe(event => {
        if (event.type === HttpEventType.Response) {
          if (event.body['success'] === true) {
            this.previewAngebote = { name: '', extraInfo: '', price: '' };
            this.url = '';
            this.isContainOfferFile = '';
            this.cartservice.getAngebote().then((response: any) => {
              this.angeboteItems = response.data;
              this.angebote = 'Angebote 1';
              this.selectedAngebote = response.data[0]._id;
            });
            this.openSnackBar('Angebote updated successfully', '');
          }
        }
      });
    } else {
      this.openSnackBar('Please fill out all fields', '');
    }
  }

  addpizzasizes() {
    const newSizes = {
      id: new Date().valueOf(),
      name: '(ø ' + this.extraoptionsizes.sizes[0].size + 'cm)', // (ø 34cm)
      amount: Number(this.extraoptionsizes.sizes[0].amount) // 6.9
    };
    console.log(newSizes);
    this.extraSizes.push(newSizes);
    this.extraoptionsizes.sizes[0] = { id: new Date().valueOf(), size: '', amount: '' };
  }

  addextraoptionprices() {
    const newPrices = {
      id: new Date().valueOf(),
      name: this.extraoptionprices.prices[0].name,
      amount: Number(this.extraoptionprices.prices[0].amount)
    };
    this.extraPrices.push(newPrices);
    this.extraoptionprices.prices[0] = { id: new Date().valueOf(), name: '', amount: '' };
  }

  itemsizedelete(item) {
    this.extraSizes = this.extraSizes.filter(x => x.id !== item.id);
  }

  itempricedelete(item) {
    this.extraPrices = this.extraPrices.filter(x => x.id !== item.id);
  }

  onSubmitData() {
    if (this.adminForm.invalid) {
      this.validateAllFormFields(this.adminForm);
      this.openSnackBar('Please fill required fields', '');
    } else {
      if (this.selectedfromlist === 'Pizzen') {
        const dishItem = {
          itemNo: new Date().valueOf(),
          itemName: this.adminForm.value.itemName,
          itemShortDescription: this.adminForm.value.itemShortDescription,
          itemPrice: Number(this.adminForm.value.itemPrice),
          itemExtraOptionsizes: {
            itemPlaceholderName: this.adminForm.value.itemName,
            sizes: this.extraSizes
          },
          itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: this.extraPrices
          }
        };
        this.cartservice.postShoppingListdish(dishItem, this.categoryid).then((response: any) => {
          if (response.success === true) {
            this.openSnackBar('Dish Item saved successfully into Pizza section', '');
           /*  this.categoryid = '',
            this.openformtoadd = false; */
            this.adminForm.reset();
            this.extraSizes = [];
            this.extraoptionsizes.sizes[0] = { id: new Date().valueOf(), size: '', amount: '' };
            this.extraoptionprices.prices[0] = { id: new Date().valueOf(), name: '', amount: '' };
            this.extraPrices = [];
          } else {
            this.openSnackBar('Failed to save Dish Item', '');
          }
        }, (error) => {
          console.log(error);
        });
      } else {
        const dishItem = {
          itemNo: new Date().valueOf(),
          itemName: this.adminForm.value.itemName,
          itemShortDescription: this.adminForm.value.itemShortDescription,
          itemPrice: Number(this.adminForm.value.itemPrice),
        };
        this.cartservice.postShoppingListdish(dishItem, this.categoryid).then(response => {
          if (response['success'] === true) {
           /*  this.categoryid = '';
            this.openformtoadd = false; */
            this.adminForm.reset();
            this.openSnackBar(response['message'], '');
          } else {
            this.openSnackBar(response['message'], '');
          }
        });
      }
    }
  }

  // validate form on submit button press
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onofferFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.selectedFile = event.target.files[0];
      this.isContainOfferFile = event.target.files[0].name;
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (eve: any) => {
        this.url = eve.target.result;
      };
    }
  }

  preview() {
    if (this.previewAngebote.price && this.previewAngebote.name && this.previewAngebote.extraInfo && this.url !== '') {
      this.previewShow = true;
    } else {
      this.openSnackBar('Please fill out all fields', '');
    }
  }

  removepreview() {
    this.previewShow = false;
    this.previewAngebote = { name: '', extraInfo: '', price: '' };
    this.url = '';
  }

  angeboteUpload() {
    if (this.url === '') {
      this.openSnackBar('Please select a file', '');
    } else {
      this.openSnackBar('Uploaded!', '');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['red-snackbar']
    });
  }

  submitBlockList() {
    if (this.blockingUser.email || this.blockingUser.phone) {
      const data = {
        email: this.blockingUser.email,
        phone: this.blockingUser.phone
      };
      this.cartservice.blockUser(data).then((res: any) => {
        if (res.success === true) {
          this.openSnackBar(res.message, '');
        } else {
          this.openSnackBar('User not found', '');
        }
      }, (err) => {
        this.openSnackBar('User not found', '');
      });
    } else {
      this.openSnackBar('Please fill atleast one field', '');
    }
  }

  primaryColorChange(color) {
    this.colors.primaryColor = color.color;
  }

  secondaryColorChange(color) {
    this.colors.secondarycolor = color.color;
  }

  submitColor() {
    if (this.colors.primaryColor && this.colors.secondarycolor) {
      this.openSnackBar('your colors has been changed', '');
    } else {
      this.openSnackBar('Please select both colors', '');
    }
  }

  unblockCustomer(unBlock) {
    this.cartservice.unBlockUser(unBlock._id).then((data: any) => {
      if (data.success === true) {
        this.dataSource.data = this.dataSource.data.filter((filterData: any) => unBlock._id !== filterData._id);
        this.openSnackBar('User blocked successfully', '');
      } else {
        this.openSnackBar('user not found', '');
      }
    }, (error) => {
      console.log(error);
      this.openSnackBar('Server error!', '');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.shared.angeboteitem.next({});
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("../../assets/images/pizza.jpg")';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundAttachment = 'fixed';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat = 'no-repeat';

  }

}
