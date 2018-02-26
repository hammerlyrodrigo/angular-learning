import {Injectable} from '@angular/core';
import {Vehicle} from './vehicle';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {ArrayUtils} from './utils';

@Injectable()
export class VehicleService {
  private vehicles$: BehaviorSubject<Vehicle[]>;
  private dataStore: {
    vehicles: Vehicle[],
    filtered: Vehicle[]
  };

  constructor() {
    this.dataStore = {vehicles: [], filtered: []};
    this.vehicles$ = new BehaviorSubject<Vehicle[]>([]);
  }

  get vehicles(): Observable<Vehicle[]> {
    return this.vehicles$.asObservable();
  }

  public load() {
    return Observable.fromPromise(dataService.fetchData()).subscribe((response: any) => {
        this.dataStore.vehicles = response;
        this.dataStore.filtered = ArrayUtils.deepCopy(response);

      this.vehicles$.next(this.dataStore.filtered);
    }, (error: any)  => {
      console.error('An error occurred', error);
    });
  }

  public filter (propertyName: string, propertyValue: string) {
    let vehicles = ArrayUtils.deepCopy(this.dataStore.vehicles);
    vehicles = ArrayUtils.filter(vehicles, propertyName, propertyValue);
    this.dataStore.filtered = vehicles;

    this.vehicles$.next(this.dataStore.filtered);
  }

  public clearFilters () {
    this.dataStore.filtered = ArrayUtils.deepCopy(this.dataStore.vehicles);
    this.vehicles$.next(this.dataStore.filtered);
  }
}
