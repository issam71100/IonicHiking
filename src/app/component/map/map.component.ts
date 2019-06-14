import {Component, OnInit} from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
declare let L;

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
        // We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
        // Creating a tile layer usually involves setting the URL template for the tile images
        // tslint:disable-next-line:only-arrow-functions
/*        const osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            osm = L.tileLayer(osmUrl, {
                maxZoom: 18,
                attribution: osmAttrib
            });*/

        // initialize the map on the "map" div with a given center and zoom
        this.map = new Map('map').setView([19.04469, 72.9258], 8);

        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            // tslint:disable-next-line
            attribution: 'openstreetmap',
            maxZoom: 18
        }).addTo(this.map);
    }

}
