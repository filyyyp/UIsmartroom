import { Component, OnInit } from '@angular/core';
import {ControlService} from "../../service/control.service";

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {
  loaded:boolean;
  power:boolean;

  constructor(private contolService : ControlService) { }

  ngOnInit() {
    this.contolService.voiceGetState().then(result => {
      this.power = result.attributes.control;
      this.loaded = true;
    });
  }

  powerChangeStatus(){
    this.contolService.voicePostState(!this.power).then(
      result=> {
        this.power = result.attributes.control;
      });
  }
}
