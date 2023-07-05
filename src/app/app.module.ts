import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanceComponent } from './distance/distance.component';
import { DistanceModule } from './distance/distance.module';
import { ResistancesModule } from './resistances/resistances.module';
import { CinemaComponent } from './cinema/cinema.component';
import { CinemaModule } from './cinema/cinema.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanceModule,
    ResistancesModule,
    CinemaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
