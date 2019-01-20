import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable, Output} from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  private localStorageKey = 'locations';

  constructor(public http: HttpClient) {
    console.log('Hello StorageProvider Provider');
      if (null === localStorage.getItem(this.localStorageKey)) {
          console.log('There are no locations yet, making an object in storage..');
          localStorage.setItem(this.localStorageKey,
              JSON.stringify([])
          );
      }
  }

  getLocations() {
    const locations = JSON.parse(localStorage.getItem(this.localStorageKey));
    if(null == locations) {
      return [];
    }
    return locations;
  }

  insertLocation(location) {
    let locations = this.getLocations();
    locations.push(location);
    localStorage.setItem(this.localStorageKey, JSON.stringify(locations));
    this.refresh.emit(null);
  }

  removeLocation(id) {
    let locations = this.getLocations();
    locations.splice(id, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(locations));
    this.refresh.emit(null);
  }
}
