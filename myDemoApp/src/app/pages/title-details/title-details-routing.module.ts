import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleDetailsPage } from './title-details.page';

const routes: Routes = [
  {
    path: '',
    component: TitleDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleDetailsPageRoutingModule {}
