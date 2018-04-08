import { Component, OnInit } from '@angular/core';
import {ControlService} from "../../service/control.service";
import {WebsocketService} from "../../service/websocket.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ WebsocketService ]
})
export class HomeComponent implements OnInit {
  time: string;
  date: string;
  temperature: number;
  weatherState: string;
  messageFromServer:string;
  connected:boolean;


  constructor(private contolService : ControlService,private wsService: WebsocketService) {
    this.wsService.createObservableSocket("ws://hassio.local:8123/api/websocket")
      .subscribe(
        data=>{

        this.messageFromServer = data;
        console.log(JSON.parse(data));

        if(JSON.parse(data).type=="event"){
          if(JSON.parse(data).event.data.entity_id=="sensor.time"){
            this.time=JSON.parse(data).event.data.new_state.state;
          }
        }




        if(this.connected==false){
          this.wsService.sendMessage({
              "id" : 1,
              "type": "subscribe_events"
            }
          );
          this.connected=true;
        }
      });


  }


  ngOnInit() {
    this.connected = false;

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
