import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  showW1: boolean = true;
  showW2: boolean = true;
  showW3: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
