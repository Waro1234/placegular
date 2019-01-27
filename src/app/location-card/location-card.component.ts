import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from '../storage.service';
import { Location} from '../Location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})

export class LocationCardComponent implements OnInit {
    @Input() location: Location;
    @Input() key: number;

    ngOnInit(): void {
        console.log(this.location);
    }

    constructor(private storageService: StorageService) {
        console.log('Hello LocationCardComponent Component');
    }

    shareLocation() {

    }

    deleteLocation() {
        this.storageService.removeLocation(this.key);
    }
}
