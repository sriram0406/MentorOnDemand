import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchmentor',
  templateUrl: './searchmentor.component.html',
  styleUrls: ['./searchmentor.component.css']
})
export class SearchmentorComponent implements OnInit{
  details 
  searchText;
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
  ngOnInit() {
    this.get_details_list()
    console.log(this.details)
  }

}
