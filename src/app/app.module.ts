import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactComponent} from './contact/contact.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import { ShopitemsComponent } from './shopitems/shopitems.component';
import {routingModule} from './routing.module';
import {HomeComponent} from './home/home.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { InfoTextComponent } from './info-text/info-text.component';
import { AppMaterialModule } from './material.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AdminloginComponent,
    ShopitemsComponent,
    HomeComponent,
    InfoTextComponent,
    CheckoutAddressComponent,
    UserloginComponent,
    RegisterComponent,
    ForgotpwdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routingModule,
    NgxGalleryModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  entryComponents: [ContactComponent, AdminloginComponent, InfoTextComponent, UserloginComponent, RegisterComponent, ForgotpwdComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
