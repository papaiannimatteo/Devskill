import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementiConsecutiviPageRoutingModule } from './elementi-consecutivi-routing.module';

import { ElementiConsecutiviPage } from './elementi-consecutivi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementiConsecutiviPageRoutingModule
  ],
  declarations: [ElementiConsecutiviPage]
})
export class ElementiConsecutiviPageModule {}
