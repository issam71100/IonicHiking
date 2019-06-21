import {Component, Input, OnInit} from '@angular/core';
import {Map, marker, polyline, tileLayer} from 'leaflet';
import {ItemService} from '../../services/item.service';
import {ActivatedRoute} from '@angular/router';

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

        console.log(this.item);


        const pathToDestination = this.item.pathToDestination;
        const poly = polyline(pathToDestination, {color: 'blue'});

        poly.addTo(this.map);

        this.map.fitBounds(poly.getBounds());

    }

}
