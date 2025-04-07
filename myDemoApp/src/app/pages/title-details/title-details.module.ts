import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitleDetailsPageRoutingModule } from './title-details-routing.module';

import { TitleDetailsPage } from './title-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitleDetailsPageRoutingModule
  ],
  declarations: [TitleDetailsPage]
})
export class TitleDetailsPageModule {}
