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
  vehicles: Observable<Vehicle[]>;
  constructor(private vehicleService: VehicleService) {
    // vehicleService.getData().then(result => this.vehicles$ = result);
  }

  ngOnInit() {
    this.vehicles = this.vehicleService.vehicles$;
    this.vehicleService.load();
  }

}
