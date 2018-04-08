import { Component, OnInit } from '@angular/core';
import {ControlService} from "../../service/control.service";
import {WebsocketService} from "../../service/websocket.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  time: string;
  date: string;
  temperature: number;
  weatherState: string;
  messageFromServer:string;

  constructor(private contolService : ControlService,private wsService: WebsocketService) {
    this.wsService.createObservableSocket("ws://hassio.local:8123/api/websocket")
      .subscribe(
        data=>{

        this.messageFromServer = data;
        console.log(data);

      });

  }


  ngOnInit() {
    this.wsService.sendMessage({
        "id" : 1,
        "type": "subscribe_events",
        "event_type": "state_changed"
      }
    );

    this.contolService.timeGetActual().then(result => {
      this.time = result.state;
    });

    this.contolService.dateGetActual().then(result => {
      this.date = result.state;
    });

    this.contolService.weatherGet().then(result => {
      this.temperature = result.attributes.temperature;
      this.weatherState = result.state;
    });



  }

}
