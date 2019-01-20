import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Location } from "../../app/Location";

/**
 * Generated class for the AddlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addlocation',
  templateUrl: 'addlocation.html',
})
export class AddlocationPage {

  location = new Location(0, '', '', '');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddlocationPage');
  }

}
