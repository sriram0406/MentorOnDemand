import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show: boolean = true;
  error_message = "";
  constructor() {
    var email = localStorage.getItem('email');
    if ((email == 'logout') || (!email)) {
      this.show = false;// this.show=false;
    } else {
      this.show = true;
    }
  }


  ngOnInit() {
  }

}
