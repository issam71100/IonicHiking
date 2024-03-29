import {Component, Input, OnInit} from '@angular/core';
import {Map, marker, polyline, tileLayer, icon, latLng, Control, DomUtil} from 'leaflet';
import {ItemService} from '../../services/item.service';
import {ActivatedRoute} from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {LocationService} from '../../services/location.service';

@Component({
    selector: 'app-map-hiking',
    templateUrl: './map-hiking.component.html',
    styleUrls: ['./map-hiking.component.scss'],
})
export class MapHikingComponent implements OnInit {

    map: Map;
    item: any;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private geolocation: Geolocation,
        private location: LocationService,
    ) {
    }


    ngOnInit() {
        this.route.params.subscribe(
            data => {
                this.item = this.itemService.getItemById(data.id)[0];
            }
        );
        // initialize the map on the "map" div with a given center and zoom
        this.map = new Map('map-show').setView([19.04469, 72.9258], 8);

        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            // tslint:disable-next-line
            attribution: 'openstreetmap',
            maxZoom: 18
        }).addTo(this.map);

        const pathToDestination = this.item.pathToDestination;
        const poly = polyline(pathToDestination, {color: 'blue'});


        console.log(pathToDestination);
        // this.getSteps(pathToDestination);


        poly.addTo(this.map);

        this.map.fitBounds(poly.getBounds());

        const watch = this.geolocation.watchPosition();

        const positionIcon = icon({
            iconUrl: 'http://chittagongit.com/download/4009',

            iconSize: [10, 10], // size of the icon
            shadowSize: [10, 10], // size of the shadow
            iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
            shadowAnchor: [10, 10],  // the same for the shadow
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        const myPosition = marker([0, 0], {icon: positionIcon}).addTo(this.map);


        LocationService.doAction(() => {
            myPosition.setLatLng([LocationService.latlngposition.lat, LocationService.latlngposition.lng]);
        });


        const positionCustomControl = Control.extend({
            options: {
                position: 'topright'
                // control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
            },

            onAdd: (map) => {
                const container = DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

                container.style.backgroundColor = 'white';
                container.style.backgroundImage = 'url(../../assets/icon/crosshairs-solid.svg)';
                container.style.backgroundSize = '20px 20px';
                container.style.backgroundPosition = 'center';
                container.style.backgroundRepeat = 'no-repeat';
                container.style.width = '30px';
                container.style.height = '30px';

                container.onclick = () => {
                    this.map.fitBounds(LocationService.latlngposition.toBounds(5));
                };
                return container;
            }

        });
        this.map.addControl(new positionCustomControl());

        const pathCustomControl = Control.extend({
            options: {
                position: 'topright'
            },

            onAdd: (map) => {
                const container = DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

                container.style.backgroundColor = 'white';
                container.style.backgroundImage = 'url(../../assets/icon/hiking-solid.svg)';
                container.style.backgroundSize = '20px 20px';
                container.style.backgroundPosition = 'center';
                container.style.backgroundRepeat = 'no-repeat';
                container.style.width = '30px';
                container.style.height = '30px';

                container.onclick = () => {
                    this.map.fitBounds(poly.getBounds());
                };
                return container;
            }

        });

        this.map.addControl(new pathCustomControl());

    }

}
