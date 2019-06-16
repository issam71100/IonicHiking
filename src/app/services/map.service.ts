import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MapService {

    constructor(private httpClient: HttpClient) {
    }

    // tslint:disable-next-line:max-line-length
    private baseUrl = 'https://maps.open-street.com/api/route/?';
    private key = '4a38b4573ebf686a922d3e440c27d767';

    get_polyline(start: [number, number] = [48.856614, 2.352221], end: [number, number] = [45.764043, 4.835659]) {
        return new Promise((resolve, reject) => {
                const origin = start[0] + ',' + start[1];
                const destination = end[0] + ',' + end[1];
                const uri = this.baseUrl + 'origin=' + origin + '&destination=' + destination + '&mode=walking&key=' + this.key;
                this.httpClient.get(uri).subscribe((res) => {
                    resolve(res);
                });
            }
        );
    }

}
