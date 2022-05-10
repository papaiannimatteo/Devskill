import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExUvaPageRoutingModule } from './ex-uva-routing.module';

import { ExUvaPage } from './ex-uva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExUvaPageRoutingModule
  ],
  declarations: [ExUvaPage]
})
export class ExUvaPageModule {}
