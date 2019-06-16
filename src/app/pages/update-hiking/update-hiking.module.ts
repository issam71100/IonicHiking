import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {UpdateHickingPage} from './update-hicking-page.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {MapHikingComponent} from '../../component/map-hiking/map-hiking.component';

const routes: Routes = [
    {
        path: '',
        component: UpdateHickingPage
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
    declarations: [UpdateHickingPage, MapHikingComponent]
})
export class UpdateItemPageModule {
}
