import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MapService} from "./map.service";


@Injectable({
    providedIn: 'root'
})
export class ItemService {
    items: Array<any> = [];

    itemsSaved: Array<any> = [];

    constructor(private mapService: MapService) {
        this.initItems();
    }

    initItems() {
        this.mapService.get_polyline().then((resolve) => {
            this.mapService.decodeMap(resolve).then((pathToDestination) => {
                console.log(resolve);
                // @ts-ignore
                const total_distance = resolve.total_distance;
                // @ts-ignore
                const totalTime = this.mapService.secondsToTime(resolve.total_time);

                // @ts-ignore
                const address = [['Lyon Centre', pathToDestination[0]], ['Paris Centre', pathToDestination[pathToDestination.length - 1]]];

                this.createItem('Lyon - Paris', address, pathToDestination, totalTime, total_distance, 'Go to Paris from Lyon');
            });
        });
    }

    createItem(title: string, address: (string | number)[][], pathToDestination, time: string, distance: number, description: string) {
        this.items.push({
            id: Number(this.items.length + 1),
            title,
            address,
            pathToDestination,
            time,
            distance,
            description
        });
    }

    getItems() {
        return this.items;
    }

    getItemById(id) {
        // tslint:disable-next-line:triple-equals
        return this.items.filter(item => item.id == id);
    }
}
