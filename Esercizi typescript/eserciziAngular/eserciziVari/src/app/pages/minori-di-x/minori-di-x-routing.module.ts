import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinoriDiXPage } from './minori-di-x.page';

const routes: Routes = [
  {
    path: '',
    component: MinoriDiXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinoriDiXPageRoutingModule {}
