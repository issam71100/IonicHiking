import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
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
        private itemService: ItemService,
    ) {
    }

    item: any;


    ngOnInit() {
        this.route.params.subscribe(
            data => {
                this.item = this.itemService.getItemById(data.id)[0];
                // if item is undefined, go back to home
                if (!this.item) {
                    this.goBack();
                }
            }
        );
    }

    goBack() {
        this.router.navigate(['/home']);
    }

}
