import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Email;
  Password;
  error_message = ""

  
  constructor(private http: HttpClient,private router: Router) { }
  
  ngOnInit() {
    
  }
  submit_form_data(){
    console.log("Email : " + this.Email);
    console.log("Password : " + this.Password);

    var body = { 
      Email: this.Email,
      Password: this.Password
      };
	
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

this.http.post("https://localhost:44329/authservice/login", body,
                  {headers: headers, responseType:'text'}).subscribe(
                    (result) => {
                      console.log(result)
                      if (result == 'Invalid User') {
                        this.error_message = "Invalid User"
                      } else {
                        localStorage.setItem('token', result);
                        localStorage.setItem('email', this.Email);
            
                        setTimeout(() => { location.reload(); }, 1);
                        this.router.navigateByUrl("/studentdashboard")
                        this.error_message = result
                      }
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
}


