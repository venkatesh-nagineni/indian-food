import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from './home/home.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  /* { path: '**', component: PagenotfoundComponent }, */
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
