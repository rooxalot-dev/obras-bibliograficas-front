import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthorsComponent } from './pages/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    SideMenuComponent,
    HomeComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
