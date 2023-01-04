import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaScpPageRoutingModule } from './lista-scp-routing.module';

import { ListaScpPage } from './lista-scp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaScpPageRoutingModule
  ],
  declarations: [ListaScpPage]
})
export class ListaScpPageModule {}
