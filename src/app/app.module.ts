import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactComponent} from './contact/contact.component';
import { routingModule} from './routing.module';
import { HomeComponent} from './home/home.component';
import { InfoTextComponent } from './info-text/info-text.component';
import { AppMaterialModule } from './material.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ExtraOptionsComponent } from './extra-options/extra-options.component';
import { SharedService} from './shared.service';
import { MenucardComponent } from './menucard/menucard.component';
import { AdmininterfaceComponent } from './admininterface/admininterface.component';
import { CurrencyEuroPipe } from './currency-euro.pipe';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { LogoutConfirmComponent } from './logout-confirm/logout-confirm.component';
import { PizzaAngeboteSelectionComponent } from './pizza-angebote-selection/pizza-angebote-selection.component';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    InfoTextComponent,
    CheckoutAddressComponent,
    UserloginComponent,
    RegisterComponent,
    ForgotpwdComponent,
    ExtraOptionsComponent,
    MenucardComponent,
    AdmininterfaceComponent,
    CurrencyEuroPipe,
    LogoutConfirmComponent,
    PizzaAngeboteSelectionComponent,
    StartRatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    NgxMaterialTimepickerModule.forRoot(),
    LayoutModule,
  ],
  entryComponents: [ContactComponent, InfoTextComponent, UserloginComponent, RegisterComponent, ForgotpwdComponent, ExtraOptionsComponent, LogoutConfirmComponent, PizzaAngeboteSelectionComponent],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
