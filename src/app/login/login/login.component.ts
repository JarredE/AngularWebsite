import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Colors } from 'chart.js';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    HttpClientModule
  ],
})

export class LoginComponent implements OnInit {

  private url = 'https://localhost:44355'
  errorMessage = ''
  jsonData: any;
  isUser: boolean = false;

  login = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {

  }

  CheckLoginData() {

    // Add Regx to this for validation
    if (!this.login.username) { this.errorMessage = 'Username is invalid'; return; }
    if (!this.login.password) { this.errorMessage = 'Password is invalid'; return; }


    const res = this.http.get(this.url + '/User/CheckLogin').subscribe(res => {
      this.jsonData = res;
      for(let i = 0; i < this.jsonData.length; i++ ){
        if(this.login.username == this.jsonData[i].username && this.login.password == this.jsonData[i].password){
          this.router.navigateByUrl('/landingpage')
        }
      }
      this.errorMessage = 'No Account Found'
    });

  }

}
