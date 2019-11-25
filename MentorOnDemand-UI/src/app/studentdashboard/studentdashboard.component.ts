import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  constructor(private router: Router) {
    var email = localStorage.getItem('email');
    if ((email=='logout')||(!email)){
      console.log('email logout')
      this.router.navigate(['']);
      // redirect to login page
    } else {
      console.log('email login' + email)
    }
   }

  ngOnInit() {
  }

}
