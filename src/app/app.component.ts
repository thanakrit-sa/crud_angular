import { Component,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';
  dataF:any [] = []
  constructor(private http:HttpClient) {

  }

  onSubmit(data) {
    console.log(data);
    
    let dataW = {
      firstname:data.firstname,
      lastname:data.lastname,
      username:data.username,
      password:data.password,
      repassword:data.repassword,
      email:data.email
    }
    this.http.post<any>('http://localhost:3000/api',dataW).subscribe(result => {
      console.log('add success');
    })
  }

  ngOnInit(): void{

  }
}
