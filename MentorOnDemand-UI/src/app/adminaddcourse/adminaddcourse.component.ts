import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-adminaddcourse',
  templateUrl: './adminaddcourse.component.html',
  styleUrls: ['./adminaddcourse.component.css']
})
export class AdminaddcourseComponent implements OnInit {
  Name;
  Duration;
  fee;
  message='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  submit_form_data(){
    console.log("Name : " + this.Name);
    console.log("Duration : " + this.Duration);
    console.log("fee : " + this.fee);

    var body = { Name:this.Name,
      fee: this.fee,
      Duration: this.Duration};

        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        this.http.post("https://localhost:44343/api/admin", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "You had successfully Added"
        alert(this.message);
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
        alert(this.message);
      }
    )
  }

}

