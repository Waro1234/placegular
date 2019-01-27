import {Component} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {StorageService} from '../storage.service';
import { Location} from '../Location';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

/**
 * Generated class for the AddlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
    location = new Location('', '', '', [0, 0], '');
    picture: any;

    constructor(
        private storageService: StorageService,
        private camera: Camera,
        private geolocation: Geolocation,
        private nativeGeocoder: NativeGeocoder
    ) {}

    submit() {
        this.storageService.insertLocation(this.location);
        this.location = new Location( '', '', '', [0, 0], '');
    }

    makePicture() {
        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            this.location.photo = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
            console.log(err);
            alert('We could not take a picture.');
        });
    }

    getLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            const options: NativeGeocoderOptions = {
                useLocale: true,
                maxResults: 1
            };

            this.location.location = [resp.coords.latitude, resp.coords.longitude];
            this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                .then((result: NativeGeocoderReverseResult[]) => {
                    const bestResult = result[0];
                    this.location.address = bestResult.thoroughfare + ' ' + bestResult.subThoroughfare + ' ' + bestResult.postalCode + ' ' + bestResult.subAdministrativeArea;
                })
                .catch((error: any) => console.log(error));

        }).catch((error) => {
            console.log('Error getting location', error);
        });

    }
}
