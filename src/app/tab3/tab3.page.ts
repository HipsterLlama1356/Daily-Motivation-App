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
  // I set the default notification frequency
  notifFreq: string = 'daily';
  // I list all possible quote categories for the user to choose from
  allCategories: string[] = ['Inspiration', 'Life', 'Productivity', 'Success', 'Health'];

  constructor(public dataService: DataService) {
    // I inject the DataService to save and load user settings
  }

  // I toggle a category on or off when the user checks or unchecks it
  toggleCategory(cat: string, event: any) {
    if (event.detail.checked) {
      // If the category is checked and not already included, I add it
      if (!this.dataService.chosenCategories.includes(cat)) {
        this.dataService.chosenCategories.push(cat);
      }
    } else {
      // If the category is unchecked, I remove it from the chosen list
      this.dataService.chosenCategories = this.dataService.chosenCategories.filter(c => c !== cat);
    }
  }

  // I check if a category is selected so the checkbox shows the correct state
  isChecked(cat: string): boolean {
    return this.dataService.chosenCategories.includes(cat);
  }

  // This debug method helps me log the current settings to the console
  logSettings() {
    console.log('Notification:', this.notifFreq);
    console.log('Save favourites:', this.dataService.showFav);
    console.log('Categories:', this.dataService.chosenCategories);
  }
}
