import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.css']
})
export class ViewrequestsComponent implements OnInit {

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

  reject_request = function(id) {
    this.http.delete("https://localhost:44336/api/student/"+id).subscribe(
      (result) => {
        this.details = result;
        this.error_message = "rejected"
        alert(this.error_message);
        this.details = [];
        this.get_details_list()
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

