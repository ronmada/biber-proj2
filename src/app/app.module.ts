import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './Components/main/main.component';
import { OverviewComponent } from './Components/overview/overview.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MasterDataComponent } from './Components/master-data/master-data.component';
import { CampaignsComponent } from './Components/campaigns/campaigns.component';
import { CouponsComponent } from './Components/coupons/coupons.component';
import { ApiImportsComponent } from './Components/api-imports/api-imports.component';


import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OverviewComponent,
    MasterDataComponent,
    CampaignsComponent,
    CouponsComponent,
    ApiImportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
