import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementiConsecutiviPage } from './elementi-consecutivi.page';

const routes: Routes = [
  {
    path: '',
    component: ElementiConsecutiviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementiConsecutiviPageRoutingModule {}
