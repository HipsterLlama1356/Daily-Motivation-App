import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  public items: string[] = [];

  showFav: boolean = true;
  chosenCategories: string[] = ['Inspiration', 'Life', 'Productivity'];

  addItem(item: string) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
