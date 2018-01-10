import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './helper/app-material/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2/index';
import { FireBaseConfig } from './../environments/firebase.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AngularFireModule.initializeApp(FireBaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
