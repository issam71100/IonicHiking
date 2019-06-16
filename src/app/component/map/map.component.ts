import {Component, OnInit} from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import polyUtil from 'polyline-encoded';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})

export class MapComponent implements OnInit {

    map: Map;
    constructor() {
    }

    ngOnInit() {
        // initialize the map on the "map" div with a given center and zoom
        this.map = new Map('map').setView([19.04469, 72.9258], 8);

        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            // tslint:disable-next-line
            attribution: 'openstreetmap',
            maxZoom: 18
        }).addTo(this.map);


        const encoded = '_p~iF~cn~U_ulLn{vA_mqNvxq`@';
        console.log(polyUtil.decode(encoded));
// prints an array of 3 LatLng objects.
    }

}
