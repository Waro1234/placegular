import {Component} from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    locations = [];
    subscription: any;

    constructor(private storageService: StorageService) {
        this.refreshList();
        this.subscription = this.storageService.refresh.subscribe(item => this.refreshList());
    }

    refreshList() {
        this.locations = this.storageService.getLocations();
        console.log(this.locations);
        console.log('Refreshing!');
    }
}
