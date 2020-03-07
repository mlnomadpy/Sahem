import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HamburgerMenuComponent } from './nav-bar/hamburger-menu/hamburger-menu.component';
import { ProfileMenuComponent } from './nav-bar/profile-menu/profile-menu.component';
import { LogoContainerComponent } from './nav-bar/logo-container/logo-container.component';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HamburgerMenuComponent,
    ProfileMenuComponent,
    LogoContainerComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
