import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserInfo,CreateSessionService} from './create-session.service'
import {v4 as uuidv4} from 'uuid';

import {RegistrationService, User} from '../registration/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registrationService:RegistrationService, private router:Router,
    private sessionService:CreateSessionService) { }
  user : User =new User(); 
  email : string ="";
  password : string ="";
  userInfo:UserInfo = new UserInfo();
  ngOnInit(): void {
  }
     login(){
       this.getUser(this.email);
      // this.email === this.user.email && this.password === this.user.password;
       if(this.email === this.user.email && this.password === this.user.password){
        this.userInfo.email = this.user.email;
        this.userInfo.userId = this.user.id.toString();
        this.userInfo.id = uuidv4();
        this.userInfo.sessionId = uuidv4();
        this.createSession();
       }
       else{
         alert("Invalid Login Credentials...");
       }
     }

     getUser(email:string): void{
       this.registrationService.getUser(email).subscribe((user) => this.user = user[0]);
     }

     createSession():void{
       this.sessionService.createSession(this.userInfo).subscribe((info)=>{
        window.localStorage.setItem('sessionId',info.sessionId);
        window.localStorage.setItem('isLogged','true');
        this.router.navigate(['']);
       })
     }


}
