import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mentoreditdetails',
  templateUrl: './mentoreditdetails.component.html',
  styleUrls: ['./mentoreditdetails.component.css']
})
export class MentoreditdetailsComponent implements OnInit {
  details =[]
  constructor(private http: HttpClient) { }
  get_details_list = function() { 
    this.http.get("https://localhost:44378/api/mentor").subscribe(
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

  delete_details = function(_id) {
    this.http.delete("https://localhost:44378/api/mentor/"+_id).subscribe(
      (result) => {
        this.details = result;
        this.error_message = "Deleted"
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
