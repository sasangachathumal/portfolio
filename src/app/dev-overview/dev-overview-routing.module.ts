import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevOverviewComponent } from './dev-overview.component';

const routes: Routes = [
  {
    path: '',
    component: DevOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevOverviewRoutingModule {}
