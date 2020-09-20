import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DropDownButtonModule} from '@syncfusion/ej2-angular-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProceedToCartComponent } from './proceed-to-cart/proceed-to-cart.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { UserOrderListComponent } from './user-order-list/user-order-list.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


enableRipple(true);




@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    AdminComponent,
    UserComponent,
    ProceedToCartComponent,
    RegistrationComponent,
    LoginComponent,
    LogOutComponent,
    UserOrderListComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownButtonModule,
    HttpClientModule,
    FormsModule


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }