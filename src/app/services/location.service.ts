import {Injectable} from '@angular/core';
import {LatLng, latLng} from 'leaflet';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {timer} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    public static latlngposition: LatLng;

    constructor(private geolocation: Geolocation) {

        LocationService.latlngposition = latLng(0, 0);
        const watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            console.log(data);
            LocationService.latlngposition = latLng(data.coords.latitude, data.coords.longitude);
        });
    }

    // tslint:disable-next-line:ban-types
    public static doAction(callback: any) {
        const sourceThree = timer(0, 5000);
        sourceThree.subscribe(val => {
            callback();
        });
    }

}
