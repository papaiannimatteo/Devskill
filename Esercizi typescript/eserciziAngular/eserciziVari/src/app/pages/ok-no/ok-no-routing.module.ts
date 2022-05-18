import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OkNoPage } from './ok-no.page';

const routes: Routes = [
  {
    path: '',
    component: OkNoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OkNoPageRoutingModule {}
