import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AppsEsLibModule} from 'apps-es-lib'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppsEsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
