import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  temperature: string;
  weatherState: string;
  messageFromServer:string;
  connected:boolean;
  profile: number ;
  idWs: number = 1;



  @Output() showSettings = new EventEmitter();


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
      this.temperature = result.attributes.temperature + "°C" ;
      this.weatherState = result.state;
    });

    this.contolService.profileGetState().then(result => {
      this.profile = result.attributes.control;
    });
  }

  settingsShow(){
    this.showSettings.emit();
  }

  setProfile(profile: number){
    //this.profile = profile;
    //console.log(this.profile);
    this.contolService.profilePostState(profile).then(
      result=> {
        this.profile = result.attributes.control;
      });
  }

  kodi(service:string,method:string = ""){
    this.idWs++;
    this.wsService.sendMessage({
        "id": this.idWs,
        "type": "call_service",
        "domain": "media_player",
        "service": service,
        "service_data": method==""?{}:{"method": method}
      }
    );
  }

}
