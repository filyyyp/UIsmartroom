import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HomeComponent} from "../screen/home/home.component";
import {BulbComponent} from "../widget/bulb/bulb.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BulbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
