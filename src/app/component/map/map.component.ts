import {Component, OnInit} from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, polyline} from 'leaflet';
import polyUtil from 'polyline-encoded';
import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})

export class MapComponent implements OnInit {
    constructor(
        private mapService: MapService
    ) { }

    map: Map;

    private  decodeMap(resolve) {

        const dec = polyUtil.decode(resolve.polyline, 6);

        // console.log(dec);

/*        const latlngs = [
            [46.7889, 4.8530],
            [47.3216, 5.0415]
        ];*/

        const poly = polyline(dec, {color: 'blue'});

        poly.addTo(this.map);

        marker(dec[0]).addTo(this.map);
        marker(dec[dec.length - 1]).addTo(this.map);

        this.map.fitBounds(poly.getBounds());

    }

    ngOnInit() {
        // initialize the map on the "map" div with a given center and zoom
        this.map = new Map('map').setView([19.04469, 72.9258], 8);

        // @ts-ignore
        this.mapService.get_polyline([46.7889, 4.8530], [47.3216, 5.0415]).then( (resolve) => {
            this.decodeMap(resolve);
        } );

        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            // tslint:disable-next-line
            attribution: 'openstreetmap',
            maxZoom: 18
        }).addTo(this.map);

    }

}
