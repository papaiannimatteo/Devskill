import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OkNoPageRoutingModule } from './ok-no-routing.module';

import { OkNoPage } from './ok-no.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkNoPageRoutingModule
  ],
  declarations: [OkNoPage]
})
export class OkNoPageModule {}
