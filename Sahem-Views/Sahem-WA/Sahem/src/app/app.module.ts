import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";

import { PipesModule } from './pipes/pipes.module';

import { HttpClientModule } from '@angular/common/http';
import { FundModule } from './fund/fund.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsService } from './projects/projects.service';
import { CreatorsService } from './creators/creators.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FundModule,
    HttpClientModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
