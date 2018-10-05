import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule,
    MatChipsModule,
  ],
  exports: [
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule,
    MatChipsModule,
  ]
})
export class AppMaterialModule { }
