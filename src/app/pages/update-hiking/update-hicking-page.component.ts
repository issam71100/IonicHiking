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

    item: any;
    editHikingForm: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public formBuilder: FormBuilder,
        private itemService: ItemService,
    ) {
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
                        time: new FormControl(this.item.time, Validators.required),
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
