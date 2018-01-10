import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule, MdCheckboxModule, MdIconModule, MdToolbarModule, MdSidenavModule, MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdToolbarModule,
    MdSidenavModule,
    MdCardModule
  ],
  declarations: []
})
export class AppMaterialModule { }
