import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import {HashLocationStrategy, LocationStrategy} from '@angular/common'


@NgModule({
  declarations: [
    AppComponent,
  routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

