import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentviewrequests',
  templateUrl: './studentviewrequests.component.html',
  styleUrls: ['./studentviewrequests.component.css']
})
export class StudentviewrequestsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  get_details_list = function() { 
    this.http.get("https://localhost:44336/api/student").subscribe(
      (result : any[]) => {
        this.details = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  
  ngOnInit() {
    this.get_details_list()
  }

}

