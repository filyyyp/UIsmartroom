import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ledlight',
  templateUrl: './ledlight.component.html',
  styleUrls: ['./ledlight.component.css']
})
export class LedlightComponent implements OnInit {
  ledPower: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  ledChangePower(){
    this.ledPower = !this.ledPower;

  }

  bulbChangeStatus(){
   // this.bulb = !this.bulb;
//spravit farby na vstup do funkcie
    //this.contolService.centralLightPostState(this.bulb).then(result=> {console.log(result);});

  }

}
