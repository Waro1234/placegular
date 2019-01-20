import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello LocationCardComponent Component');
    this.text = 'Hello World';
  }

}
