import {Component, HostBinding, OnInit} from '@angular/core';
import {timer} from 'rxjs';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {


    started: boolean;

    timeInSecs: number;

    private sourceTwo;

    ngOnInit() {
        this.started = false;
    }

    initTimer() {
        this.started = true;
        this.sourceTwo = timer(0, 1000);
        this.sourceTwo.subscribe(val => {
            if (this.started) {
                this.timeInSecs = val;
            } else {
                this.sourceTwo.unsubscribe();
            }
        });
    }

    stopTimer() {
        this.started = false;
    }
}
