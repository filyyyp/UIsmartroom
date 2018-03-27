import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulbComponent } from './bulb/bulb.component';
import { TvComponent } from './tv/tv.component';
import { VoiceComponent } from './voice/voice.component';
import { SocketComponent } from './socket/socket.component';
import { LedlightComponent } from './ledlight/ledlight.component';
import { CurtainComponent } from './curtain/curtain.component';
import { AmplifierComponent } from './amplifier/amplifier.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BulbComponent, TvComponent, VoiceComponent, SocketComponent, LedlightComponent, CurtainComponent, AmplifierComponent]
})
export class WidgetModule { }
