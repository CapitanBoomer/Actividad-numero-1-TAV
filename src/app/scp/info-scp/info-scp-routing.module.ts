import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoScpPage } from './info-scp.page';

const routes: Routes = [
  {
    path: '',
    component: InfoScpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoScpPageRoutingModule {}
