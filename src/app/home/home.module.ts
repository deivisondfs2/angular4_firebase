import { CvComponent } from './../cv/cv.component';
import { AboutComponent } from './../about/about.component';
import { AppMaterialModule } from './../helper/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule
  ],
  providers: [AngularFireDatabase],
  declarations: [HomeComponent, AboutComponent, CvComponent]
})
export class HomeModule { }
