import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevOverviewRoutingModule } from './dev-overview-routing.module';
import { DevOverviewComponent } from './dev-overview.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { WorkingExpreanceComponent } from '../working-expreance/working-expreance.component';
import { MySkilsComponent } from '../my-skils/my-skils.component';

@NgModule({
  declarations: [
    DevOverviewComponent,
    AboutMeComponent,
    WorkingExpreanceComponent,
    MySkilsComponent
  ],
  imports: [
    CommonModule,
    DevOverviewRoutingModule
  ]
})
export class DevOverviewModule { }
