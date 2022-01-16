import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBinComponent } from './pages/add-bin/add-bin.component';
import { ReportComponent } from './pages/report/report.component';
import { ReportMapComponent } from './pages/report-map/report-map.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    AddBinComponent,
    ReportComponent,
    ReportMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
