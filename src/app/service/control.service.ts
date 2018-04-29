import { Injectable } from '@angular/core';
import {State} from "../model/State";
import {Http} from "@angular/http";
import {BulbState} from "../model/BulbState";

@Injectable()
export class ControlService {

  constructor(private httpClient: Http) {
  }

  centralLightGetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/hello_mqtt.last_message')
      .toPromise()
      .then(result => result.json() as State)

  }

  centralLightPostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/hello_mqtt.last_message',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

  timeGetActual(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/sensor.time')
      .toPromise()
      .then(result => result.json() as State)
  }

  dateGetActual(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/sensor.date')
      .toPromise()
      .then(result => result.json() as State)
  }

  weatherGet(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/weather.yweather')
      .toPromise()
      .then(result => result.json() as State)
  }


  /*
  this.httpClient.post('http://hassio.local:8123/api/states/hello_mqtt.last_message',{
      state:'bulba',
      attributes:{
        control:this.bulb
      }
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );



   */
}
