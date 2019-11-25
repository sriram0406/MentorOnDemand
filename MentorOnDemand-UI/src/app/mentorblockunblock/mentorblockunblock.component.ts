import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentorblockunblock',
  templateUrl: './mentorblockunblock.component.html',
  styleUrls: ['./mentorblockunblock.component.css']
})
export class MentorblockunblockComponent implements OnInit {
  details = []
  id;
  message;
  constructor(private http: HttpClient) { }
  get_details_list = function () {
    this.http.get("https://localhost:44329/authservice/userlist").subscribe(
      (result: any[]) => {
        this.details = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
  block=function(id){
  this.http.get("https://localhost:44329/authservice/blockunblock/" + id)
  .subscribe((result) => {
    console.log(result)
    this.message = " You had successfully blocked"
    alert(this.message);
    this.get_details_list()
  },
    (error) => {
      console.log(error)
      this.message = "Error : Backend is running?";
      alert(this.message);
      this.get_details_list()
    }
  )
  }
  unBlock=function(id){
    this.http.get("https://localhost:44329/authservice/blockunblock/" + id)
    .subscribe((result) => {
      console.log(result)
      this.message = " You had successfully unblocked"
      alert(this.message);
    },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running?";
        alert(this.message);
      }
    )
    }


  ngOnInit() {
    this.get_details_list()
    this.block(this.id)
    this.unBlock(this.id)
    
  }

}


