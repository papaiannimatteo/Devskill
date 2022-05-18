import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NInvPage } from './n-inv.page';

const routes: Routes = [
  {
    path: '',
    component: NInvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NInvPageRoutingModule {}
