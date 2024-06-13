import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../Dashboard/dashboard/dashboard.component';
import { NavigationbarComponent } from '../../navidationbar/navigationbar/navigationbar.component';
import { ResumePageComponent } from '../../ResumePage/resumePage/resumePage.component';


@Component({
  standalone: true,
  selector: 'app-LandingPage',
  templateUrl: './LandingPage.component.html',
  styleUrls: ['./LandingPage.component.css'],
  imports: [
    DashboardComponent,
    NavigationbarComponent,
    ResumePageComponent,
  ],
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
