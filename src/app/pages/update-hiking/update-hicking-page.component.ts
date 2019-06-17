import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ItemService} from '../../services/item.service';

@Component({
    selector: 'app-update-item',
    templateUrl: './update-hicking-page.component.html',
    styleUrls: ['./update-hicking-page.component.scss'],
})
export class UpdateHickingPage implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public formBuilder: FormBuilder,
        private itemService: ItemService,
    ) {
    }

    item: any;
    editHikingForm: FormGroup;

    static secondsToTime(timestamp) {

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
        const datetime = new Date('1970-01-01T' + timeString + 'Z');
        const formattedTime = datetime.getHours() + ':' + datetime.getMinutes() + ':' + datetime.getSeconds();
        return formattedTime;
    }

    ngOnInit() {
        this.route.params.subscribe(
            data => {
                this.item = this.itemService.getItemById(data.id)[0];
                // if item is undefined, go back to home
                if (!this.item) {
                    this.goBack();
                } else {
                    this.editHikingForm = this.formBuilder.group({
                        title: new FormControl(this.item.title, Validators.required),
                        addressStart: new FormControl(this.item.address[0][0]),
                        addressLng0: new FormControl(this.item.address[0][1]),
                        addressLng1: new FormControl(this.item.address[0][2]),
                        addressEnd: new FormControl(this.item.address[1][0]),
                        addressLat0: new FormControl(this.item.address[1][1]),
                        addressLat1: new FormControl(this.item.address[1][2]),
                        time: new FormControl(UpdateHickingPage.secondsToTime(this.item.time)),
                        description: new FormControl(this.item.description, Validators.required)
                    });
                }
            }
        );
    }

    goBack() {
        this.router.navigate(['/home']);
    }

    updateItem(value) {
        const updateHiking = {
            id: this.item.id,
            title: value.title,
            addressStart: value.addressStart,
            addressLng0: value.addressLng0,
            addressLng1: value.addressLng1,
            addressEnd: value.addressEnd,
            addressLat0: value.addressLat0,
            addressLat1: value.addressLat1,
            time: value.time,
            description: value.description
        };
        this.itemService.updateItem(updateHiking);
        this.goBack();
    }
}
