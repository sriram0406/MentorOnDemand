import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {

  Email;
  Password;
  FirstName;
  LastName;
  Role = 2;
  message = '';
  PhoneNumber;
  Linkedinprofile;
  log(x) { console.log(x); }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  submit_form_data() {
    console.log("FirstName : " + this.FirstName);
    console.log("LastName : " + this.LastName);
    console.log("Email : " + this.Email);
    console.log("Password : " + this.Password);
    console.log("Role : " + this.Role);
    console.log("phone : " + this.PhoneNumber);
    console.log("linkedin : " + this.Linkedinprofile);
    var body = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Password: this.Password,
      Role: this.Role,
      PhoneNumber: this.PhoneNumber,
      Linkedinprofile: this.Linkedinprofile
    };

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });



    this.http.post("https://localhost:44329/authservice/mentorregister", body,
      { headers: headers, responseType: 'text' }).subscribe(
        (result) => {
          console.log(result)
          this.message = "Congratulations, You have successfully registered!"
          alert(this.message)
        },
        (error) => {
          console.log(error)
          this.message = "Error : Backend is running? or Registered already?";
        }
      )
  }

}