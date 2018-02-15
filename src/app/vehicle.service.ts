import {Injectable} from '@angular/core';
import {Vehicle} from './vehicle';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class VehicleService {
  private _vehicles$: BehaviorSubject<Vehicle[]>;
  private _vehiclesStore: Vehicle[];

  constructor() {
    this._vehicles$ = <BehaviorSubject<Vehicle[]>>new BehaviorSubject([]);
  }

  getData(): Promise<Vehicle[]> {
    return dataService.fetchData().then(this.extractData).catch(this.handleError);
  }

  get vehicles$() {
    return this._vehicles$.asObservable();
  }

  load() {
    dataService.fetchData().then((response: any) => {
      this._vehiclesStore = response;
      this._vehicles$.next(Object.assign({}, this._vehiclesStore));
    }).catch((error: any) => {
      console.error('An error occurred', error);
    });
  }

  private extractData(response: any) {
    return response;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
