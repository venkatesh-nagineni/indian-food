import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CartService } from '../cart.service';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-admininterface',
  templateUrl: './admininterface.component.html',
  styleUrls: ['./admininterface.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdmininterfaceComponent implements OnInit {

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

  extraoptionsizes = {
    itemPlaceholderName: '',
    sizes: [{ id: new Date().valueOf(), name: '', amount: '' }]
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

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private snackBar: MatSnackBar, private cartservice: CartService) {
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
    this.cartservice.getShoppingList().then(response => {
      this.mainshoppinglistitems = response['data'];
      this.removeCategory = '';
      this.categorydishName = '';
    });
  }

  radioChange() {
    this.cartservice.getShoppingList().then(response => {
      this.mainshoppinglistitems = response['data'];
    });
  }

  addNewCategory() {
    this.displaynewcategory = true;
    this.categoryid = '';
    this.openformtoadd = false;
  }

  submitCategoryData() {
    if (this.newCategoryData.name === '' && !this.selectedCategoryFile) {
      this.openSnackBar('Please fill all fields', '');
    } else {
      const uploadData = new FormData();
      uploadData.append('image', this.selectedCategoryFile, this.selectedCategoryFile.name);

      let httpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.append('name', this.newCategoryData.name);

      this.http.post('/api/postnewCategoryData/', uploadData, { reportProgress: true, observe: 'events', headers: httpHeaders }).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('upload progress' + Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      });
      this.openSnackBar('Category submitted successfully', '');
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

  categorychangedForRemove(id) {
    console.log(id);
  }

  adddishform() {
    this.openformtoadd = true;
  }

  oncategoryFileChanged(event) {
    this.selectedCategoryFile = event.target.files[0];
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
      itemShortDescription: ['', [Validators.required]],
      itemPrice: ['', [Validators.required]],
      // chooseExtraInfo: ['']
    });
    this.cartservice.getShoppingList().then(response => {
      console.log(response);
      this.mainshoppinglistitems = response['data'];
    });
  }

  tabChanged(event: MatTabChangeEvent) {
    if (event.index === 1) {
      this.cartservice.getAngebote().then((response: any) => {
        this.angeboteItems = response.data;
        this.angebote = 'Angebote 1';
        this.selectedAngebote = response.data[0]._id;
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
    if (this.previewAngebote.price && this.previewAngebote.name && this.previewAngebote.extraInfo && this.url !== '') {
      this.previewShow = false;
      const uploadData = new FormData();
      uploadData.append('image', this.selectedFile, this.selectedFile.name);

      let headers = new HttpHeaders();
      headers = headers.append('data', this.previewAngebote.extraInfo);
      headers = headers.append('price', this.previewAngebote.price);
      headers = headers.append('id', this.selectedAngebote);
      headers = headers.append('name', this.previewAngebote.name);

      this.http.post('/api/postAngeboteData/', uploadData, { observe: 'events', headers: headers }).subscribe(event => {
        if (event.type === HttpEventType.Response) {
          if (event.body['success'] === true) {
            this.previewAngebote = { name: '', extraInfo: '', price: '' };
            this.url = '';
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
      name: this.extraoptionsizes.sizes[0].name,
      amount: Number(this.extraoptionsizes.sizes[0].amount)
    };
    this.extraSizes.push(newSizes);
    this.extraoptionsizes.sizes[0] = { id: new Date().valueOf(), name: '', amount: '' };
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
      if (this.selectedfromlist === 'Pizza') {
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
        this.cartservice.postShoppingListdish(dishItem, this.categoryid).then(response => {
          console.log(response);
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
            this.categoryid = '';
            this.openformtoadd = false;
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

}
