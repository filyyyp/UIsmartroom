import { Component, OnInit } from '@angular/core';
import {ControlService} from "../../service/control.service";

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {
  power:boolean;
  loaded:boolean;
  socket:number = 0;

  constructor(private contolService : ControlService) { }

  ngOnInit() {
    this.contolService.socket0GetState().then(result => {
      this.power = result.attributes.control;
      this.loaded = true;
    });
  }

  changeSocket(socketNum:number){
    this.socket = socketNum;
    this.loaded = false;
    switch (socketNum){
      case 0:
        this.contolService.socket0GetState().then(result => {
          this.power = result.attributes.control;
          this.loaded = true;
        });
        break;
      case 1:
        this.contolService.socket1GetState().then(result => {
          this.power = result.attributes.control;
          this.loaded = true;
        });
        break;
      case 2:
        this.contolService.socket2GetState().then(result => {
          this.power = result.attributes.control;
          this.loaded = true;
        });
        break;
      default:
        break;
    }
  }

  setStateSocket(){
    switch (this.socket){
      case 0:
        this.contolService.socket0PostState(!this.power).then(
          result=> {
            this.power = result.attributes.control;
          });
        break;
      case 1:
        this.contolService.socket1PostState(!this.power).then(
          result=> {
            this.power = result.attributes.control;
          });
        break;
      case 2:
        this.contolService.socket2PostState(!this.power).then(
          result=> {
            this.power = result.attributes.control;
          });
        break;
      default:
        break;
    }

  }

}
