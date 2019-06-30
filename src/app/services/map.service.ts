import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import polyUtil from 'polyline-encoded';


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
                // const uri = `${this.baseUrl}origin=${origin}`;
                this.httpClient.get(uri).subscribe((res) => {
                    resolve(res);
                });
            }
        );
    }

    decodeMap(code) {
        return new Promise(((resolve, reject) => {
            resolve(polyUtil.decode(code.polyline, 6));
        }));
    }

    secondsToTime = timestamp => {

        const secondsNum = timestamp;
        let hours: number = Math.floor(secondsNum / 3600);
        let minutes: number = Math.floor((secondsNum - (hours * 3600)) / 60);
        let seconds: number = secondsNum - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = Number('0' + hours);
        }
        if (minutes < 10) {
            minutes = Number('0' + minutes);
        }
        if (seconds < 10) {
            seconds = Number('0' + seconds);
        }
        console.log(hours + ':' + minutes + ':' + seconds);
        // const datetime = new Date('1970-01-01T' + timeString + 'Z');
        return `${hours}:${minutes}:${seconds}`;
    }
}
