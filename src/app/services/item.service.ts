import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Array<any> = [
    {
      id: '1',
      title: 'Naruto',
      address: 'Konoha',
      time: '12:25',
      description: 'Direction univers de naruto'
    },
  ];

  constructor() { }

  createItem(title: string, address: [], time: string, description: string) {

    this.items.push({
      // tslint:disable-next-line:radix
      id: parseInt(String(this.items.length + 1) ),
      title,
      address,
      time,
      description
    });
  }

  getItems() {
    return this.items;
  }

  getItemById(id) {
    return this.items.filter(item => item.id == id);
  }

  updateItem(newValues) {
    const itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }
}
