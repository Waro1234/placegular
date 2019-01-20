import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';
import {AddlocationPage} from "../pages/addlocation/addlocation";
import {LocationlistPage} from "../pages/locationlist/locationlist";
import {LocationCardComponent} from "../components/location-card/location-card";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StorageProvider} from '../providers/storage/storage';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        LocationlistPage,
        AddlocationPage,
        LocationCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage,
        LocationlistPage,
        AddlocationPage,
        LocationCardComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        StorageProvider
    ]
})
export class AppModule {
}
