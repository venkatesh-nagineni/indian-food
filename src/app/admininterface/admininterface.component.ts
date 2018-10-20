import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { shoppingList } from '../../assets/data/cartList';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-admininterface',
  templateUrl: './admininterface.component.html',
  styleUrls: ['./admininterface.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdmininterfaceComponent implements OnInit {

  shoppingListItems: any[] = shoppingList;
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

  extraoptionsizes = {
    itemPlaceholderName: '',
    sizes: [{id: new Date().valueOf(), name: '', amount: '' }]
  };

  extraoptionprices = {
    itemPlaceholderName: '',
    prices: [{id: new Date().valueOf(), name: '', amount: '' }]
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

  addNewCategory() {
    this.displaynewcategory = true;
    this.categoryid = '';
    this.openformtoadd = false;
  }

  submitCategoryData() {
    if (this.newCategoryData.name === '' && !this.selectedCategoryFile) {
      this.openSnackBar('Please fill all fields', '');
    } else {
      const newcategorydata = {
        dishType: this.newCategoryData.name,
        banner: this.selectedCategoryFile.name,
        dishItems: []
      };
      this.cartservice.postnewcategory(newcategorydata).then(response => {
        console.log(response);
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

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
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

  /* onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('my-backend.com/file-upload', uploadData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('upload progress' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
  } */

  ngOnInit() {
    this.adminForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemShortDescription: ['', [Validators.required]],
      itemPrice: ['', [Validators.required]],
      chooseExtraInfo: ['']
    });
    this.cartservice.getShoppingList().then(response => {
      console.log(response);
      this.mainshoppinglistitems = response['data'];
    });
  }

  addpizzasizes() {
    this.extraSizes.push(this.extraoptionsizes.sizes[0]);
    this.extraoptionsizes.sizes[0] = {id: new Date().valueOf(), name: '', amount: '' };
    console.log(this.extraSizes);
  }

  addextraoptionprices() {
    this.extraPrices.push(this.extraoptionprices.prices[0]);
    this.extraoptionprices.prices[0] = {id: new Date().valueOf(), name: '', amount: '' };
    console.log(this.extraPrices);
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
      const dishItem = {
        itemName: this.adminForm.value.itemName,
        itemShortDescription: this.adminForm.value.itemShortDescription,
        itemPrice: this.adminForm.value.itemPrice,
        chooseExtraInfo: this.adminForm.value.chooseExtraInfo,
        itemExtraOptionsizes: {
          itemPlaceholderName: this.adminForm.value.itemName,
          sizes: this.extraPrices
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

  removecategoryChanged(category) {
    this.categorydishforRemove = this.shoppingListItems;
    this.shoppingListItems.forEach(items => {
      if (items.dishType === category) {
        this.categorydishforRemove = items.dishItems;
      }
    });
  }

  removeDishchanged(dish) {
    console.log(dish);
  }

  submitAngebote() {
    if (this.previewAngebote.price && this.previewAngebote.name && this.previewAngebote.extraInfo && this.url !== '') {
      this.previewShow = false;
      this.previewAngebote = { name: '', extraInfo: '', price: '' };
      this.url = '';
    } else {
      this.openSnackBar('Please fill out all fields', '');
    }
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
