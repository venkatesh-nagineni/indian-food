import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Angebotetypes} from '../../assets/data/cartList';

@Component({
  selector: 'app-pizza-angebote-selection',
  templateUrl: './pizza-angebote-selection.component.html',
  styleUrls: ['./pizza-angebote-selection.component.scss']
})
export class PizzaAngeboteSelectionComponent {

  selectedAll = false;
  ErrorMessage = false;
  public pizzas = ['Pizza Salami', 'Pizza Hänchen', 'Pizza Margherita', 'Pizza Mozerella'];
  public angebote = {
    angebote1: '',
    angebote2: '',
    angebote3: ''
  };

  constructor(public dialogRef: MatDialogRef<PizzaAngeboteSelectionComponent>, @Inject(MAT_DIALOG_DATA) public data: Angebotetypes) {}

  onCloseCancel(): void {
    this.dialogRef.close();
  }

  angeboteChange() {
    this.selectedAll = Object.keys(this.angebote).every((k) => this.angebote[k]);
  }

  angeboteToCart() {
    if (this.selectedAll === true) {
      const result = Object.values(this.angebote).join(',');
      this.data.SelectedAngebote = result;
      this.dialogRef.close({ closed: true, selectedPizzas: this.data });
    } else {
      this.ErrorMessage = true;
    }
  }

}
