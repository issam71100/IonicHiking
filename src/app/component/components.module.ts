import {NgModule} from '@angular/core';
import {TimerComponent} from './timer/timer.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [TimerComponent],
    exports: [TimerComponent],
    imports: [
        IonicModule,
        CommonModule,
    ]
})
export class ComponentsModule {
    constructor() {
    }
}
