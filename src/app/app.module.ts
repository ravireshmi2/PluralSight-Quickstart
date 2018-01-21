import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address-comp.component';
import { DataService } from './data.service'
import { LoggerService } from './logger.service'
// this guy below describes the class that follows it
// e.g. decorator @NgModule()
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // what stuff do i need
  declarations: [ AppComponent, 
    CustomerListComponent,
     CustomerDetailComponent,
     AddressComponent ], // what things are in my app
  providers: [
    DataService,
    LoggerService],
  bootstrap:    [ AppComponent ] // where do i start
})
export class AppModule { }
