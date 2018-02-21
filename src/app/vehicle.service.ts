import {Injectable} from '@angular/core';
import {Vehicle} from './vehicle';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ArrayUtils} from './utils';

@Injectable()
export class VehicleService {
  public vehicles: Observable<Vehicle[]>;
  public brands: Observable<string[]>;
  public types: Observable<string[]>;
  public colors: Observable<string[]>;

  private brands$: BehaviorSubject<string[]>;
  private type$: BehaviorSubject<string[]>;
  private colors$: BehaviorSubject<string[]>;

  private dataStore: {
    vehicles: Vehicle[],
    filtered: Vehicle[],
    brands: string[],
    types: string[],
    colors: string[]
  };

  constructor() {
    this.dataStore = {vehicles: [], filtered: [], brands: [], types: [], colors: []};

    this.brands$ = <BehaviorSubject<string[]>>new BehaviorSubject([]);
    this.brands = this.brands$.asObservable();

    this.type$ = <BehaviorSubject<string[]>>new BehaviorSubject([]);
    this.types = this.type$.asObservable();

    this.colors$ = <BehaviorSubject<string[]>>new BehaviorSubject([]);
    this.colors = this.colors$.asObservable();
  }

  public load() {
    dataService.fetchData().then((response: any) => {
      this.dataStore.vehicles = ArrayUtils.deepCopy(response);
      this.dataStore.filtered = ArrayUtils.deepCopy(response);

      this.loadStores(response);

    }).catch((error: any) => {
      console.error('An error occurred', error);
    });
  }

  public filter(filterProperty: string, filterValue: string) {
    this.dataStore.filtered = ArrayUtils.filter(this.dataStore.vehicles, filterProperty, filterValue);

    this.loadStore('type', 'types', this.dataStore.filtered);
    this.loadStore('brand', 'brands', this.dataStore.filtered);
    this.loadStore('colors', 'colors', this.dataStore.filtered, true);

    this.brands$.next(this.dataStore.brands);
    this.colors$.next(this.dataStore.colors);
  }

  public clearFilters() {
    this.dataStore.filtered = ArrayUtils.deepCopy(this.dataStore.vehicles);
    this.loadStores(this.dataStore.vehicles);
  }

  private loadStores(source: any[]) {
    this.loadStore('type', 'types', source);
    this.loadStore('brand', 'brands', source);
    this.loadStore('colors', 'colors', source, true);

    this.type$.next(this.dataStore.types);
    this.brands$.next(this.dataStore.brands);
    this.colors$.next(this.dataStore.colors);
  }

  private loadStore(property: string, storeName: string, dataSource: any[], flatten: boolean = false) {
    this.dataStore[storeName] = ArrayUtils.mapProperty(property, dataSource);
    if (flatten) {
      this.dataStore[storeName] = ArrayUtils.flatten(this.dataStore[storeName]);
    }
    this.dataStore[storeName] = ArrayUtils.filterUnique(this.dataStore[storeName]);
    this.dataStore[storeName] = ArrayUtils.sortAsc(this.dataStore[storeName]);
  }

}
