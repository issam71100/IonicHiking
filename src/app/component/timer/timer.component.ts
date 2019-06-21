import {Component, HostBinding, OnInit} from '@angular/core';


@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

    @HostBinding('hidden')
    private static show: boolean;
    private static item: any;

    constructor() {
        TimerComponent.show = false;
    }

    static initTimer(hiking) {
        this.show = true;
        this.item = hiking;
    }

    static exitTimer() {
        this.show = false;
        this.item = null;
    }

    ngOnInit() {
    }


    get staticTime() {
        return TimerComponent.item.time;
    }

    get staticTimeShow() {
        return TimerComponent.show;
    }
}
