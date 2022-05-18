import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NInvPageRoutingModule } from './n-inv-routing.module';

import { NInvPage } from './n-inv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NInvPageRoutingModule
  ],
  declarations: [NInvPage]
})
export class NInvPageModule {}
