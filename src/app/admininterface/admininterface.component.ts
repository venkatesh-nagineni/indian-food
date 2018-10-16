import { Component, OnInit } from '@angular/core';
import { shoppingList } from '../../assets/data/cartList';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-admininterface',
  templateUrl: './admininterface.component.html',
  styleUrls: ['./admininterface.component.scss']
})
export class AdmininterfaceComponent implements OnInit {

  shoppingListItems: any[] = shoppingList;
  categoryName: string;
  radiogroup: any;
  selectedFile: File;
  selectedOfferFile: File;
  adminForm: FormGroup;
  submitted = false;
  extraSizes = [];
  extraPrices = [];
  url = '';
  previewShow = false;

  extraoptionsizes = {
    itemPlaceholderName: '',
    sizes: [{ id: '', name: '', amount: '' }]
  };

  extraoptionprices = {
    itemPlaceholderName: '',
    prices: [{ id: '', name: '', amount: '' }]
  };

  previewAngebote = {
    name: '',
    extraInfo: '',
    price: ''
  };

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.radiogroup = 'adddish';
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  /* onofferFileChanged(event) {
    this.selectedOfferFile = event.target.files[0];
  } */

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
      itemNo: ['', Validators.required],
      itemName: ['', Validators.required],
      itemShortDescription: ['', [Validators.required]],
      itemPrice: ['', [Validators.required]],
      chooseExtraInfo: ['', Validators.required]
    });
  }

  addpizzasizes() {
    this.extraSizes.push(this.extraoptionsizes.sizes[0]);
    this.extraoptionsizes.sizes[0] = { id: '', name: '', amount: '' };
  }

  addextraoptionprices() {
    this.extraPrices.push(this.extraoptionprices.prices[0]);
    this.extraoptionprices.prices[0] = { id: '', name: '', amount: '' };
  }

  itemsizedelete(item) {
    this.extraSizes = this.extraSizes.filter(x => x.id !== item.id);
  }

  itempricedelete(item) {
    this.extraPrices = this.extraPrices.filter(x => x.id !== item.id);
  }

  onSubmitData() {
    const dishItem = {
      itemNo: this.adminForm.value.itemNo,
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
    console.log(dishItem);
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
