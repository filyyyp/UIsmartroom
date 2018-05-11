import { Component, OnInit } from '@angular/core';
import {ControlService} from "../../service/control.service";

@Component({
  selector: 'app-ledlight',
  templateUrl: './ledlight.component.html',
  styleUrls: ['./ledlight.component.css']
})
export class LedlightComponent implements OnInit {
  loaded:boolean;
  power:boolean;
  intensity:number = 1;
  ledColor:number;



  constructor(private contolService : ControlService) { }

  ngOnInit() {
    this.contolService.ledLightGetState().then(result => {
      this.power = result.attributes.control;
    });

    this.contolService.ledLightIntesityGetState().then(result => {
      this.intensity = result.attributes.control;
    });

    this.contolService.ledLightColorGetState().then(result => {
      this.ledColor = result.attributes.control;
      this.loaded = true;
    });
  }

  powerChangeStatus(){
    this.contolService.ledLightPostState(!this.power).then(
      result=> {
        this.power = result.attributes.control;
      });
  }

  intensityChangeStatus(value){
   // console.log(value);
    this.contolService.ledLightIntensityPostState(this.intensity).then(
      result=> {
        this.intensity = result.attributes.control;
      });
  }

  colorChangeStatus(value:number){
    this.contolService.ledLightColorPostState(value).then(
      result=> {
        this.ledColor = value;
      });
  }


}
