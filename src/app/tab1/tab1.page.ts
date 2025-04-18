import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  standalone: true,                 // <– stand‑alone component
  imports: [IonicModule, CommonModule],
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  quotes: string[] = [
    'Stay positive, work hard!',
    'Believe you can and you’re halfway there.',
    'Small steps every day.'           // keep adding the rest if you like
  ];
  currentQuote = this.quotes[0];

  refreshQuote(): void {
    const i = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[i];
    console.log('New quote:', this.currentQuote);
  }
}
