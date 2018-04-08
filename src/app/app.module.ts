import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from "./main/app.component";
import {HomeComponent} from "./screen/home/home.component";
import {BulbComponent} from "./widget/bulb/bulb.component";
import {FormControl, FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SettingsComponent} from "./screen/settings/settings.component";
import {AmplifierComponent} from "./widget/amplifier/amplifier.component";
import {CurtainComponent} from "./widget/curtain/curtain.component";
import {LedlightComponent} from "./widget/ledlight/ledlight.component";
import {SocketComponent} from "./widget/socket/socket.component";
import {TvComponent} from "./widget/tv/tv.component";
import {VoiceComponent} from "./widget/voice/voice.component";
import {UiSwitchModule} from "ngx-ui-switch";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSliderModule} from "@angular/material";
import {ControlService} from "./service/control.service";
import {Http, HttpModule} from "@angular/http";
import {WebsocketService} from "./service/websocket.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    AmplifierComponent,
    BulbComponent,
    CurtainComponent,
    LedlightComponent,
    SocketComponent,
    TvComponent,
    VoiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    UiSwitchModule,
    MatSliderModule,
    HttpModule

  ],
  providers: [
    ControlService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
