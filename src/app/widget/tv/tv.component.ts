import { Component, OnInit } from '@angular/core';
import {ControlService} from "../../service/control.service";

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  loaded:boolean;
  loaded2:boolean;
  power:boolean;
  mute:boolean;


  constructor(private contolService : ControlService) { }

  ngOnInit() {
    this.contolService.tvGetState().then(result => {
      this.power = result.attributes.control;
      this.loaded = true;
    });

    this.contolService.tvMuteGetState().then(result => {
      this.mute = result.attributes.control;
      this.loaded2=true;
    });
  }

  powerChangeStatus(){
    this.contolService.tvPostState(!this.power).then(
      result=> {
        this.power = result.attributes.control;
      });
  }

  muteChangeStatus(){
    this.contolService.tvMutePostState(!this.mute).then(
      result=> {
        this.mute = result.attributes.control;
      });
  }

}
