import { Component, OnInit } from '@angular/core';
import {ControlService} from "../../service/control.service";

@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.css']
})
export class CurtainComponent implements OnInit {
  loaded:boolean;
  power:boolean;

  constructor(private contolService : ControlService) { }

  ngOnInit() {
    this.contolService.curtainGetState().then(result => {
      this.power = result.attributes.control;
      this.loaded = true;
    });
  }

  powerChangeStatus(){
    this.contolService.curtainPostState(!this.power).then(
      result=> {
        this.power = result.attributes.control;
      });
  }

}
