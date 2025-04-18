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
  categories = {
    inspire: true,
    life: false
  };

  constructor(public dataService: DataService) {}

  // temporary debug method to prove it saves
  logSettings() {
    console.log('Notification:', this.notifFreq);
    console.log('Save favourites:', this.dataService.showFav);
    console.log('Categories:', this.categories);
  }
}
