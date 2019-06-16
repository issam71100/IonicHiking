import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CreateHikingPage} from './create-hiking-page.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {MapComponent} from '../../component/map/map.component';

const routes: Routes = [
    {
        path: '',
        component: CreateHikingPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        LeafletModule.forRoot(),
    ],
    exports: [
        MapComponent
    ],
    declarations: [CreateHikingPage, MapComponent]
})
export class NewItemPageModule {
}
