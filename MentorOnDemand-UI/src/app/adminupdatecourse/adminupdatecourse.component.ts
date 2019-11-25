import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-adminupdatecourse',
  templateUrl: './adminupdatecourse.component.html',
  styleUrls: ['./adminupdatecourse.component.css']
})
export class AdminupdatecourseComponent implements OnInit {

  name: string;
  duration: string;
  fee:number;
  id:number;
  message: string;
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.http.get("https://localhost:44343/api/admin/" + this.id).subscribe(
      (result) => {
        this.id=result['id']
        this.name = result['name'];
        this.duration = result['duration'];
        this.fee = result['fee'];
        //this.error_message = "Deleted"
        // this.users = [];
        console.log('testing')
        console.log(this.name)
        console.log(this.duration);
        console.log(this.fee)
        // this.get_user_list()
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )

  }

  submit_form_data() {
    var course = {
      id: this.id,
      name: this.name,
      duration: this.duration,
      fee: this.fee
    };
console.log(course);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put("https://localhost:44343/api/admin/" + this.id, course,
      { headers: headers.set('Authorization', 'my-auth-token')}).subscribe(
        (result) => {
          console.log(result)
          this.message = "You had successfully updated"
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

