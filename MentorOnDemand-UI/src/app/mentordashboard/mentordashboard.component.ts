import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentordashboard',
  templateUrl: './mentordashboard.component.html',
  styleUrls: ['./mentordashboard.component.css']
})
export class MentordashboardComponent implements OnInit {

  constructor(private router: Router) {
    var email = localStorage.getItem('email');
    if ((email=='logout')||(!email)){
      console.log('email logout');
      this.router.navigate(['/mentorlogin']);
      // redirect to login page
    } else {
      console.log('email login' + email)
    }
   }

  ngOnInit() {
  }

}
