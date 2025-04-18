import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgIf, NgFor],
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  notifFreq: string = 'daily';
  allCategories: string[] = ['Inspiration', 'Life', 'Productivity', 'Success', 'Health'];

  constructor(public dataService: DataService) {}

  toggleCategory(cat: string, event: any) {
    if (event.detail.checked) {
      if (!this.dataService.chosenCategories.includes(cat)) {
        this.dataService.chosenCategories.push(cat);
      }
    } else {
      this.dataService.chosenCategories = this.dataService.chosenCategories.filter(c => c !== cat);
    }
  }

  isChecked(cat: string): boolean {
    return this.dataService.chosenCategories.includes(cat);
  }

  // temporary debug method to prove it saves
  logSettings() {
    console.log('Notification:', this.notifFreq);
    console.log('Save favourites:', this.dataService.showFav);
    console.log('Categories:', this.dataService.chosenCategories);
  }
}
