import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home-page/home-page.module#HomePageModule',
    data: {animation: 'HomePage'}
  },
  {
    path: 'dev',
    loadChildren: './dev-overview/dev-overview.module#DevOverviewModule',
    data: {animation: 'DevPage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
