import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaScpPage } from './lista-scp.page';

const routes: Routes = [
  {
    path: '',
    component: ListaScpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaScpPageRoutingModule {}
