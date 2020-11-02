import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoginInfo } from './service/login-model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavbarTreeComponent } from './global-components/navbar-tree/navbar-tree.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //material
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    AppComponent,
    NavbarTreeComponent,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule
 ],
  providers: [LoginInfo],
  bootstrap: [AppComponent]
})
export class AppModule { }

