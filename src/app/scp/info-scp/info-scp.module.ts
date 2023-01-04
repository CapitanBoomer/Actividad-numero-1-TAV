import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoScpPageRoutingModule } from './info-scp-routing.module';

import { InfoScpPage } from './info-scp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoScpPageRoutingModule
  ],
  declarations: [InfoScpPage]
})
export class InfoScpPageModule {}
