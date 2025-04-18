import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // I store past quotes here after loading from my DataService
  constructor(private dataService: DataService) {}
  // I inject the data service to get my quote history

  pastQuotes: string[] = [
    // I inject the data service to get my quote history
  ];

  // When the page starts, I load all saved quotes into pastQuotes
  ngOnInit() {
    this.pastQuotes = this.dataService.getItems();
  }
}
