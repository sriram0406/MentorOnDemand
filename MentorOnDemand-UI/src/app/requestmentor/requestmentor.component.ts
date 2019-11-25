import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requestmentor',
  templateUrl: './requestmentor.component.html',
  styleUrls: ['./requestmentor.component.css']
})
export class RequestmentorComponent implements OnInit {
  Mentorname;
  Coursename;
  FromDate;
  ToDate;
  Timeslot;
  id;
  courses = [];
  error_message
  message = '';
  PhoneNumber;
  Studentname;

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);

    });


    this.http.get("https://localhost:44378/api/mentor/" + this.id).subscribe(
      (result) => {
        this.Mentorname = result['mentorname'];
        this.Coursename = result['coursename'];
        this.FromDate = result['fromDate'];
        this.ToDate = result['toDate'];
        this.Timeslot = result['timeslot']

      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )

  }

  submit_form_data() {
    console.log("id : " + this.id);
    console.log("Mentorname : " + this.Mentorname);
    console.log("Coursename : " + this.Coursename);
    console.log("Timeslot : " + this.Timeslot);
    console.log("FromDate : " + this.FromDate);
    console.log("ToDate : " + this.ToDate);
    console.log("stud name : " + this.Studentname);
    console.log("phone : " + this.PhoneNumber);


    var body = {
      
      Mentorname: this.Mentorname,
      Coursename: this.Coursename,
      FromDate: this.FromDate,
      ToDate: this.ToDate,
      Timeslot: this.Timeslot,
      Studentname: this.Studentname,
      phoneNumber: this.PhoneNumber
    };

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post("https://localhost:44336/api/student", body,
      { headers: headers, responseType: 'text' }).subscribe(
        (result) => {
          console.log(result)
          this.message = "Your request sent";
        },
        (error) => {
          console.log(error)
          this.message = "Error : Backend is running?";
        }
      );
  }

}
