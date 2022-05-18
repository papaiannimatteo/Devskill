import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisibilePer3Page } from './divisibile-per3.page';

const routes: Routes = [
  {
    path: '',
    component: DivisibilePer3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisibilePer3PageRoutingModule {}
