import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinoriDiXPageRoutingModule } from './minori-di-x-routing.module';

import { MinoriDiXPage } from './minori-di-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinoriDiXPageRoutingModule
  ],
  declarations: [MinoriDiXPage]
})
export class MinoriDiXPageModule {}
