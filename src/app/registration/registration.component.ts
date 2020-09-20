import { Component, OnInit } from '@angular/core';
import {RegistrationService,User} from './registration.service';
import {Router} from '@angular/router';
import {v4} from 'uuid';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   user : User=new User();
  constructor(private registration:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }
  Terms(){

  }

  createUser():void{
    this.user.id=v4();
    console.log(this.user);
   this.registration.createUser(this.user).subscribe(()=>this.router.navigate([''])); 
  
}

  

}
