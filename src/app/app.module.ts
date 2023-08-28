import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatalistComponent } from './datalist/datalist.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';

@NgModule({
  declarations: [
    AppComponent,
    DatalistComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
