import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admineditcourse',
  templateUrl: './admineditcourse.component.html',
  styleUrls: ['./admineditcourse.component.css']
})
export class AdmineditcourseComponent implements OnInit {
  courses =[];
  
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
      }
    )
  }

  delete_course = function(id) {
    this.http.delete("https://localhost:44343/api/admin/"+id).subscribe(
      (result) => {
        this.courses = result;
        this.error_message = "Deleted"
        alert(this.error_message);
        this.users = [];
        this.get_course_list()
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

}
