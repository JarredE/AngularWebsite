import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../Dashboard/dashboard/dashboard.component';
import { NavigationbarComponent } from '../../navidationbar/navigationbar/navigationbar.component';


@Component({
  standalone: true,
  selector: 'app-LandingPage',
  templateUrl: './LandingPage.component.html',
  styleUrls: ['./LandingPage.component.css'],
  imports: [
    DashboardComponent,
    NavigationbarComponent,
  ],
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
