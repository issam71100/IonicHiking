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


        this.mapService.get_polyline(/*latLngStart, latLngEnd*/).then((resolve) => {
            this.mapService.decodeMap(resolve).then((pathToDestination) => {
                // @ts-ignore
                const total_distance = resolve.total_distance;
                // @ts-ignore
                const totalTime = this.secondsToTime(resolve.total_time);
                console.log(address);
                this.itemService.createItem(value.title, address, pathToDestination, totalTime, total_distance, value.description);
                this.newHikingForm.reset();
                this.goBack();
            });
        });
    }

    private secondsToTime = timestamp => {

        const secondsNum = timestamp;
        let hours: number = Math.floor(secondsNum / 3600);
        let minutes: number = Math.floor((secondsNum - (hours * 3600)) / 60);
        let seconds: number = secondsNum - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = Number('0' + hours);
        }
        if (minutes < 10) {
            minutes = Number('0' + minutes);
        }
        if (seconds < 10) {
            seconds = Number('0' + seconds);
        }
        console.log(hours + ':' + minutes + ':' + seconds);
        const timeString = `${hours}:${minutes}:${seconds}`;
        // const datetime = new Date('1970-01-01T' + timeString + 'Z');
        return timeString;
    };


}
