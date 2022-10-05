import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallyPageRoutingModule } from './tally-routing.module';

import { TallyPage } from './tally.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallyPageRoutingModule
  ],
  declarations: [TallyPage]
})
export class TallyPageModule {}
