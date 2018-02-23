import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {PropertyPipe} from './pipes/property.pipe';
import {UniquePipe} from './pipes/unique.pipe';
import {SortAscPipe} from './pipes/sort-asc.pipe';
import {FlattenPipe} from './pipes/flatten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    DropdownComponent,
    PropertyPipe,
    UniquePipe,
    SortAscPipe,
    FlattenPipe
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
