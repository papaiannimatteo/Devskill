import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExUvaPage } from './ex-uva.page';

const routes: Routes = [
  {
    path: '',
    component: ExUvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExUvaPageRoutingModule {}
