import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';


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
    MatCardModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatRadioModule
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
    MatCardModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatRadioModule
  ]
})
export class AppMaterialModule { }
