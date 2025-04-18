import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  public items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
