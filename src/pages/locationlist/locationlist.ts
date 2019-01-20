import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {StorageProvider} from "../../providers/storage/storage";

/**
 * Generated class for the LocationlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-locationlist',
    templateUrl: 'locationlist.html',
})
export class LocationlistPage {
    locations = [];
    subscription: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider) {
    }

    refreshList()
    {
        this.locations = this.storageProvider.getLocations();
        console.log(this.locations);
    }

    ionViewDidLoad() {
        this.refreshList();
        this.subscription = this.storageProvider.refresh.subscribe(item => this.refreshList());
    }

}
