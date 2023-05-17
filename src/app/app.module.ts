import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewtoolsComponent } from './viewtools/viewtools.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AddtoolsComponent } from './addtools/addtools.component';
const myRoute:Routes=[
  {
    path:"",
    component:ViewtoolsComponent
  },
  {
    path:"addTools",
    component:AddtoolsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewtoolsComponent,
    NavbarComponent,
    AddtoolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
