import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {MenucardComponent} from './menucard/menucard.component';
const routes: Routes = [

  // {path: 'home', component: HomeComponent},
  // { path: '', redirectTo: '', pathMatch: 'full' },
  /* { path: '**', component: PagenotfoundComponent }, */
  {path: 'login', component: UserloginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenucardComponent}

];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
