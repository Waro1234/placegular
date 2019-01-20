import {Component, Input} from '@angular/core';
import {Location} from "../../app/Location";
import {StorageProvider} from "../../providers/storage/storage";

/**
 * Generated class for the LocationCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'location-card',
    templateUrl: 'location-card.html'
})
export class LocationCardComponent {
    @Input() location: Location;
    @Input() key: number;

    constructor(private storageProvider: StorageProvider) {
        console.log('Hello LocationCardComponent Component');
    }

    shareLocation() {

    }

    deleteLocation() {
        this.storageProvider.removeLocation(this.key);
    }
}
