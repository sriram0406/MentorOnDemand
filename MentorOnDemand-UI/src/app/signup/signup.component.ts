import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Email;
  Password;
  FirstName;
  LastName;
  Role=3;
  message='';
  PhoneNumber;
  log(x) {console.log(x);}
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  submit_form_data(){
    console.log("FirstName : " + this.FirstName);
    console.log("LastName : " + this.LastName);
    console.log("Email : " + this.Email);
    console.log("Password : " + this.Password);
    console.log("Role : " + this.Role);
    console.log("phone : " + this.PhoneNumber);
    
    var body = { FirstName:this.FirstName,
      LastName:this.LastName,
      Email: this.Email,
      Password: this.Password,
      Role: this.Role,
      PhoneNumber:this.PhoneNumber};

  let headers = new HttpHeaders({'Content-Type': 'application/json'});
	
  

     this.http.post("https://localhost:44329/authservice/register", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You have successfully registered!"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }

}




