import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText;
   courses
   constructor(private http: HttpClient) { }
   get_course_list = function() {
    this.http.get("https://localhost:44343/api/admin").subscribe(
      (result : any[]) => {
        this.courses = result;
        this.error_message = "";
        console.log(this.courses);
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error);
        console.log(this.courses)
      }
    )
  }
  get_mentor_list = function() {
    this.http.get("https://localhost:44378/api/mentor").subscribe(
      (result : any[]) => {
        this.details = result;
        this.error_message = "";
        console.log(this.details);
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error);
        console.log(this.courses)
      }
    )
  }
   ngOnInit() {
   this.get_course_list()
   
   }
 
 }
 
 
