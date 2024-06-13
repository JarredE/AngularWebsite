import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css'],
  imports: [
    MatIconModule
  ],
})
export class NavigationbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
