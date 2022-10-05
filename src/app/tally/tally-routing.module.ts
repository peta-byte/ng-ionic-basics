import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TallyPage } from './tally.page';

const routes: Routes = [
  {
    path: '',
    component: TallyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallyPageRoutingModule {}
