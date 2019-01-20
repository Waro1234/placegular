import { Component } from '@angular/core';

import { LocationlistPage } from "../locationlist/locationlist";
import { AddlocationPage } from "../addlocation/addlocation";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LocationlistPage;
  tab2Root = AddlocationPage;

  constructor() {

  }
}
