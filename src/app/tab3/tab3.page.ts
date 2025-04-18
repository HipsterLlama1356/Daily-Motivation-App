import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgIf, NgFor],
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  notifFreq: string = 'daily';
  saveFav: boolean = true;
  categories = {
    inspire: true,
    life: false
  };

  // temporary debug method to prove it saves
  logSettings() {
    console.log('Notification:', this.notifFreq);
    console.log('Save favourites:', this.saveFav);
    console.log('Categories:', this.categories);
  }
}
