import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mentoradddetails',
  templateUrl: './mentoradddetails.component.html',
  styleUrls: ['./mentoradddetails.component.css']
})
export class MentoradddetailsComponent implements OnInit {
  Mentorname;
  Coursename;
  FromDate;
  ToDate;
  Timeslot;
  message = ''
  i = []
  constructor(private http: HttpClient) { }
  get_course_list = function () {
    this.http.get("https://localhost:44343/api/admin").subscribe(
      (result: any[]) => {
        this.i = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
  
  ngOnInit() {
    this.get_course_list()
  }
  submit_form_data() {
    console.log("Mentorname : " + this.Mentorname);
    console.log("Coursename : " + this.Coursename);
    console.log("Timeslot : " + this.Timeslot);
    console.log("FromDate : " + this.FromDate);
    console.log("ToDate : " + this.ToDate);

    var body = {
      Mentorname: this.Mentorname,
      Coursename: this.Coursename,
      FromDate: this.FromDate,
      ToDate: this.ToDate,
      Timeslot: this.Timeslot
    };

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post("https://localhost:44378/api/mentor", body,
      { headers: headers, responseType: 'text' }).subscribe(
        (result) => {
          console.log(result)
          this.message = " You had successfully Added"
        },
        (error) => {
          console.log(error)
          this.message = "Error : Backend is running?";
        }
      )

  }

}
