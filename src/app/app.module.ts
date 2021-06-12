import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./pages/home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {SingleModule} from "./pages/single/single.module";
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    SingleModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
