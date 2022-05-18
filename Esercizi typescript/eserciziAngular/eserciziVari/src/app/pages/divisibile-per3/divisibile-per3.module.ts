import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisibilePer3PageRoutingModule } from './divisibile-per3-routing.module';

import { DivisibilePer3Page } from './divisibile-per3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisibilePer3PageRoutingModule
  ],
  declarations: [DivisibilePer3Page]
})
export class DivisibilePer3PageModule {}
