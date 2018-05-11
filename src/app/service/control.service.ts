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
      .get('http://hassio.local:8123/api/states/bulb.state')
      .toPromise()
      .then(result => result.json() as State)

  }

  centralLightPostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/bulb.state',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

  ledLightGetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/ledlight.power')
      .toPromise()
      .then(result => result.json() as State)

  }

  ledLightPostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/ledlight.power',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

  ledLightColorGetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/ledlight.color')
      .toPromise()
      .then(result => result.json() as State)

  }

  ledLightColorPostState(input: number): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/ledlight.color',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

  ledLightIntesityGetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/ledlight.intensity')
      .toPromise()
      .then(result => result.json() as State)

  }

  ledLightIntensityPostState(input: number): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/ledlight.intesity',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }


  socket0GetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/socket.zero')
      .toPromise()
      .then(result => result.json() as State)

  }

  socket0PostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/socket.zero',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

  socket1GetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/socket.one')
      .toPromise()
      .then(result => result.json() as State)

  }

  socket1PostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/socket.one',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }
  socket2GetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/socket.two')
      .toPromise()
      .then(result => result.json() as State)

  }

  socket2PostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/socket.two',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

  curtainGetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/curtain.state')
      .toPromise()
      .then(result => result.json() as State)

  }

  curtainPostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/curtain.state',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

  tvGetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/tv.power')
      .toPromise()
      .then(result => result.json() as State)

  }

  tvPostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/tv.power',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

  tvMuteGetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/tv.mute')
      .toPromise()
      .then(result => result.json() as State)

  }

  tvMutePostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/tv.mute',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

  voiceGetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/voice.state')
      .toPromise()
      .then(result => result.json() as State)

  }

  voicePostState(input: boolean): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/voice.state',{state:'Ui',attributes:{control:input}})
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

  profileGetState(): Promise<State> {
    return this.httpClient
      .get('http://hassio.local:8123/api/states/profile.state')
      .toPromise()
      .then(result => result.json() as State)

  }

  profilePostState(input: number): Promise<any>{
    return this.httpClient.post('http://hassio.local:8123/api/states/profile.state',{state:'Ui',attributes:{control:input}})
      .toPromise()
      .then(result => result.json() as BulbState);
  }

}
