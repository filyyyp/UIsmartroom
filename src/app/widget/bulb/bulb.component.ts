import { Component, OnInit } from '@angular/core';
import {ControlService} from "../../service/control.service";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";


import {HttpClient} from "@angular/common/http";
import {State} from "../../model/State";
import {BulbState} from "../../model/BulbState";


@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.css']
})
export class BulbComponent implements OnInit {
  loaded: boolean;
  bulb: boolean;


  constructor(private contolService : ControlService){
  }


  ngOnInit() {
    this.contolService.centralLightGetState().then(result => {
      console.log(result.attributes.control);
      this.bulb = result.attributes.control;
      this.loaded = true;
    });

  }

  bulbChangeStatus(){
    //this.bulb = !this.bulb;
    this.contolService.centralLightPostState(!this.bulb).then(
      result=> {
        this.bulb = (result.json() as BulbState).attributes.control;
        console.log((result.json() as BulbState));
      });



    //this.contolService.centralLightPostState(this.bulb).then(result=> {console.log(result);});

  }

}
