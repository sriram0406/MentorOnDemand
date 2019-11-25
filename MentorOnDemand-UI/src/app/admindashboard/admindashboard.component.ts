import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router: Router) {
    var email = localStorage.getItem('email');
    if ((email=='logout')||(!email)){
      console.log('email logout');
      this.router.navigate(['/adminlogin']);
      // redirect to login page
    } else {
      console.log('email login' + email)
    }
   }

  ngOnInit() {
  }

}
