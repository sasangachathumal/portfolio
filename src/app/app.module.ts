import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { DevOverviewModule } from './dev-overview/dev-overview.module';
import { HomePageModule } from './home-page/home-page.module';
import { YoutubeOverviewModule } from './youtube-overview/youtube-overview.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DevOverviewModule,
    HomePageModule,
    YoutubeOverviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
