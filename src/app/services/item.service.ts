import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Array<any> = [

  ];

  constructor() { }

  createItem(title: string, address: FormControl[][], pathToDestination, time: string, distance: number, description: string) {

    this.items.push({
      // tslint:disable-next-line:radix
      id: parseInt(String(this.items.length + 1) ),
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

  updateItem(newValues) {
    // tslint:disable-next-line:triple-equals
    const itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }
}
