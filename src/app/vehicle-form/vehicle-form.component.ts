import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import {VehicleService} from '../vehicle.service';
import {Observable} from 'rxjs/Observable';
import {PropertyPipe} from '../pipes/property.pipe';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})

export class VehicleFormComponent implements OnInit {

  public selection: {
    type: string,
    brand: string,
    colors: string
  };

  constructor(private vehicleService: VehicleService) {}

  get vehicles (): Observable<Vehicle[]> {
    return this.vehicleService.vehicles;
  }

  ngOnInit() {
    // this.vehicles$ = this.vehicleService.vehicles;
    // this.types$ = this.vehicleService.types;
    // this.brands$ = this.vehicleService.brands;
    // this.colors$ = this.vehicleService.colors;
    // this.selection = {
    //   type: '',
    //   brand: '',
    //   colors: ''
    // };
    this.vehicleService.load();
  }

  onDrowpdownChange(select: string, value: string) {
    // this.selection[select] = value;
    // if ('' === value) {
    //   this.vehicleService.clearFilters();
    // } else {
    //   this.vehicleService.filter(select, value);
    // }
  }

  onDropdownClear(select: string) {
    this.selection[select] = '';
  }
}
