import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logoutt(){
    alert("Successfully Logout.......");
    }

}
