import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-mentorupdatedetails',
  templateUrl: './mentorupdatedetails.component.html',
  styleUrls: ['./mentorupdatedetails.component.css']
})
export class MentorupdatedetailsComponent implements OnInit {
  Mentorname;
  Coursename;
  FromDate;
  ToDate;
  Timeslot;
  id;
  courses = [];
  message = '';

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) {
  }
  get_course_list = function () {
    this.http.get("https://localhost:44378/api/mentor").subscribe(
      (result: any[]) => {
        this.courses = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.get_course_list();
    });

    this.http.get("https://localhost:44378/api/mentor/" + this.id).subscribe(
      (result) => {
        this.id = result['id'];
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


    var body = {
      id: this.id,
      Mentorname: this.Mentorname,
      Coursename: this.Coursename,
      FromDate: this.FromDate,
      ToDate: this.ToDate,
      Timeslot: this.Timeslot
    };
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put("https://localhost:44378/api/mentor/" + this.id, body,
      { headers: headers, responseType: 'text' }).subscribe(
        (result) => {
          console.log(result)
          this.message = "Congratulations, You had successfully Updated"
          alert(this.message);
        },
        (error) => {
          console.log(error)
          this.message = "Error : Backend is running? or any other error";
        }
      )
  }

}