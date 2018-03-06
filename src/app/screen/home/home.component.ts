import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showW1: boolean = true;
  showW2: boolean = true;
  showW3: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
