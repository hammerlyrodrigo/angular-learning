import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import {VehicleService} from '../vehicle.service';
import {Observable} from 'rxjs/Observable';

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

  constructor(private vehicleService: VehicleService) {
    this.selection = {
      type: '',
      brand: '',
      colors: ''
    };
  }

  get vehicles (): Observable<Vehicle[]> {
    return this.vehicleService.vehicles;
  }

  ngOnInit() {
    this.vehicleService.load();
  }

  onDrowpdownItemChange(select: string, value: string) {
    this.selection[select] = value;
    if ('' === value) {
      this.vehicleService.clearFilters();
    } else {
      this.vehicleService.filter(select, value);
    }
  }
}
