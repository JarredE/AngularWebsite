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

  private url = 'http://localhost:3000'
  errorMessage = ''
  jsonData: any;

  login = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const res = this.http.get(this.url + '/user/login').subscribe(res => {
      console.log(res);
      this.jsonData = res;
    });

  }

  CheckLoginData() {
    if (!this.login.username) { this.errorMessage = 'Username is invalid'; return; }
    if (!this.login.password) { this.errorMessage = 'Password is invalid'; return; }

    if (this.login.username == this.jsonData.Username && this.login.password == this.jsonData.Password) {
      console.log('Moving to next page');
      //this.router.navigateByUrl('/landingpage')
    }

    else { this.errorMessage = 'Username or Password is Incorrect' }

  }

}
