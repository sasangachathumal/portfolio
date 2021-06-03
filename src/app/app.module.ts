import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { MainIntroComponent } from './main-intro/main-intro.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkilsComponent } from './my-skils/my-skils.component';
import { WorkingExpreanceComponent } from './working-expreance/working-expreance.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewPageComponent,
    MainIntroComponent,
    AboutMeComponent,
    MySkilsComponent,
    WorkingExpreanceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
