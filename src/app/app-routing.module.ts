import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './Components/overview/overview.component';
import { MasterDataComponent } from './Components/master-data/master-data.component';
import { CampaignsComponent } from './Components/campaigns/campaigns.component';
import { CouponsComponent } from './Components/coupons/coupons.component';
import { ApiImportsComponent } from './Components/api-imports/api-imports.component';

const routes: Routes = [
  { path: 'overview', pathMatch: 'full', component: OverviewComponent },
  { path: 'masterData', pathMatch: 'full', component: MasterDataComponent },
  { path: 'campaign', pathMatch: 'full', component: CampaignsComponent },
  { path: 'coupons', pathMatch: 'full', component: CouponsComponent },
  { path: 'imports', pathMatch: 'full', component: ApiImportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
