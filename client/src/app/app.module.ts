import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalconfirmedComponent } from './totalconfirmed/totalconfirmed.component';
import { TotaldeathComponent } from './totaldeath/totaldeath.component';
import { TotalrecoveredComponent } from './totalrecovered/totalrecovered.component';
import { TotalsuspectedComponent } from './totalsuspected/totalsuspected.component';
import { TotalrecoveryComponent } from './totalrecovery/totalrecovery.component';
import { RecovertyanddeathratesComponent } from './recovertyanddeathrates/recovertyanddeathrates.component';
import { TotalreportComponent } from './totalreport/totalreport.component';
import { DailycasesComponent } from './dailycases/dailycases.component';
import { DailyrecoveriesComponent } from './dailyrecoveries/dailyrecoveries.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TotalconfirmedComponent,
    TotaldeathComponent,
    TotalrecoveredComponent,
    TotalsuspectedComponent,
    TotalrecoveryComponent,
    RecovertyanddeathratesComponent,
    TotalreportComponent,
    DailycasesComponent,
    DailyrecoveriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
