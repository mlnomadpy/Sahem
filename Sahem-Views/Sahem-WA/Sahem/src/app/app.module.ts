import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";

import { PipesModule } from './pipes/pipes.module';

import { HttpClientModule } from '@angular/common/http';
import { FundModule } from './fund/fund.module' ;
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    PipesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
