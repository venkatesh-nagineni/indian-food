import { Component, OnInit } from '@angular/core';
import { shoppingList } from '../../assets/data/cartList';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  adminForm: FormGroup;
  submitted = false;
  extraSizes = [];
  extraPrices = [];

  extraoptionsizes = {
    itemPlaceholderName: '',
    sizes: [{ id: '', name: '', amount: '' }]
  };

  extraoptionprices = {
    itemPlaceholderName: '',
    prices: [{ id: '', name: '', amount: '' }]
  };

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.radiogroup = 'adddish';
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
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
      itemNo: ['', Validators.required],
      itemName: ['', Validators.required],
      itemShortDescription: ['', [Validators.required, Validators.email]],
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

 /*  onSubmitData() {
    console.log(this.adminForm.value);
  } */

}
