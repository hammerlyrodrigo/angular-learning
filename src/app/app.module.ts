import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // {provide: 'dataService', useValue: dataService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
