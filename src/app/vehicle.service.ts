import {Injectable} from '@angular/core';
import {Vehicle} from './vehicle';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ArrayUtils} from './utils';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class VehicleService {
  private vehicles$: BehaviorSubject<Vehicle[]>;
  private dataStore: {
    vehicles: Vehicle[]
  };

  constructor() {
    this.dataStore = {vehicles: []};
    this.vehicles$ = new BehaviorSubject<Vehicle[]>([]);
  }

  get vehicles(): Observable<Vehicle[]> {
    return this.vehicles$.asObservable();
  }

  public load() {
    // dataService.fetchData().then((response: any) => {
    //   // this.dataStore.vehicles = ArrayUtils.deepCopy(response);
    //   // this.dataStore.filtered = ArrayUtils.deepCopy(response);
    //   //
    //   // this.loadStores(response);
    //
    // }).catch((error: any) => {
    //   console.error('An error occurred', error);
    // });

    return Observable.fromPromise(dataService.fetchData()).subscribe((response: any) => {
        this.vehicles$.next(response);
        this.dataStore.vehicles = response;
    }, (error: any)  => {

    });
  }


}
