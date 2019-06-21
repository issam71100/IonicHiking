import {NgModule} from '@angular/core';
import {TimerComponent} from './timer/timer.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [TimerComponent],
    exports: [TimerComponent],
    imports: [
        IonicModule,
    ]
})
export class ComponentsModule {
    constructor() {
    }
}
