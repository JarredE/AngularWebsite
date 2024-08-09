import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
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
  const params = new HttpParams()
  .set('Username', this.login.username)
  .set('Password', this.login.password);

    // Add Regx to this for validation
    if (!this.login.username) { this.errorMessage = 'Username is invalid'; return; }
    if (!this.login.password) { this.errorMessage = 'Password is invalid'; return; }

    const res = this.http.post(this.url + '/User/GetLogin', null, { params: params }).subscribe(res => {
      if(res == true){
        this.router.navigateByUrl('/landingpage')
      }
      else this.errorMessage = 'No Account Found'
    });

  }

}
