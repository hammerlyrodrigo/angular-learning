import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // {provide: 'dataService', useValue: dataService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
