import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {ProceedToCartComponent} from './proceed-to-cart/proceed-to-cart.component'
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { UserOrderListComponent } from './user-order-list/user-order-list.component';

const routes: Routes = [
  { path: '', component:ShoppingCartComponent },
  {path:'User', component : UserComponent},
  {path:'Admin',component: AdminComponent},
  {path:'proceed-to-cart', component: ProceedToCartComponent},
  {path:'Registration',component:RegistrationComponent},  
  {path:'Login',component:LoginComponent},
  {path:'log-out',component:LogOutComponent},
  {path:'user-order-list',component:UserOrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
