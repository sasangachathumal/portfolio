import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YoutubeOverviewRoutingModule } from "./youtube-overview-routing.module";
import { YoutubeOverviewComponent } from "./youtube-overview.component";

@NgModule({
  declarations: [
    YoutubeOverviewComponent
  ],
  imports: [
    CommonModule,
    YoutubeOverviewRoutingModule
  ]
})
export class YoutubeOverviewModule { }
