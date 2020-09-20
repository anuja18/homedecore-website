import { Component } from '@angular/core';
import {ItemModel, MenuEventArgs} from '@syncfusion/ej2-angular-splitbuttons';
import {HttpClientModule} from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeDecoreWebsite';
  constructor(private router:Router){}
  logout(){
    window.localStorage.setItem("isLogged","false");
    window.localStorage.setItem("sessionId",'');
    this.router.navigate([''])
    }



}