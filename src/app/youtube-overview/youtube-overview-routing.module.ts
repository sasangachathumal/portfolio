import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YoutubeOverviewComponent } from "./youtube-overview.component";

const routes: Routes = [
  {
    path: '',
    component: YoutubeOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeOverviewRoutingModule { }
