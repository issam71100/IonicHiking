import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ItemService} from '../../services/item.service';
import {MapService} from '../../services/map.service';

@Component({
    selector: 'app-new-item',
    templateUrl: './create-hiking-page.component.html',
    styleUrls: ['./create-hiking-page.component.scss'],
})
export class CreateHikingPage implements OnInit {

    newHikingForm: FormGroup;

    constructor(
        private router: Router,
        public formBuilder: FormBuilder,
        private itemService: ItemService,
        private mapService: MapService,
    ) {
    }

    ngOnInit() {
        this.newHikingForm = this.formBuilder.group({
            title: new FormControl('', Validators.required),
            addressStart: new FormControl(''),
            addressLng0: new FormControl(''),
            addressLng1: new FormControl(''),
            addressEnd: new FormControl(''),
            addressLat0: new FormControl(''),
            addressLat1: new FormControl(''),
            time: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required)
        });

    }

    goBack() {
        this.router.navigate(['/home']);
    }

    createItem(value) {
        const address = [
            [
                value.addressStart,
                value.addressLat0,
                value.addressLng0
            ],
            [
                value.addressEnd,
                value.addressLat1,
                value.addressLng1
            ]
        ];
        const latLngStart: [number, number] = [value.addressLat0, value.addressLng0];
        const latLngEnd: [number, number] = [value.addressLat1, value.addressLng1];


        this.mapService.get_polyline(latLngStart, latLngEnd).then((resolve) => {
            this.mapService.decodeMap(resolve).then((pathToDestination) => {
                // @ts-ignore
                const total_distance = resolve.total_distance;
                // @ts-ignore
                const total_time = resolve.total_time;
                this.itemService.createItem(value.title, address, pathToDestination, total_time, total_distance, value.description);
                this.newHikingForm.reset();
                this.goBack();
            });
        });
    }

}
