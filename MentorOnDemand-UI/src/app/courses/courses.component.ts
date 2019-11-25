import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses =[]
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
  ngOnInit() {

    this.get_course_list()
  }

}
