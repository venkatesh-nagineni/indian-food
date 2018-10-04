import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {ShopitemsComponent} from './shopitems/shopitems.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'online-bestellen', component: ShopitemsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  /* { path: '**', component: PagenotfoundComponent }, */
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
