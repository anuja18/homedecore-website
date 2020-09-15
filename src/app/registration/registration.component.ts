import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   Terms(){
            alert("Terms And Conditions..");

   }
   

  Registered(){
     
       alert("Register with our Website"); 

  }

}
