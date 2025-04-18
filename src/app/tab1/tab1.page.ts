import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab1',
  standalone: true,                 // <– stand‑alone component
  imports: [IonicModule, CommonModule],
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  quotes: string[] = [
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not for the lazy.",
    "Dream it. Wish it. Do it.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Do something today that your future self will thank you for.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't stop when you're tired. Stop when you're done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Little things make big days.",
    "It's going to be hard, but hard does not mean impossible.",
    "Don't limit your challenges. Challenge your limits.",
    "Sometimes later becomes never. Do it now.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Work hard in silence. Let success make the noise.",
    "Make each day your masterpiece.",
    "Act like it’s impossible to fail.",
    "Don't dream of success. Work for it.",
    "Stay hungry. Stay foolish.",
    "Your only limit is your mind.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Doubt kills more dreams than failure ever will.",
    "Success is what comes after you stop making excuses.",
    "Discipline is doing what needs to be done, even if you don't want to do it.",
    "Start where you are. Use what you have. Do what you can.",
    "You don’t have to be great to start, but you have to start to be great.",
    "You are stronger than you think.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "Great things take time. Be patient.",
    "If you get tired, learn to rest not to quit.",
    "Push through the pain. Giving up hurts more.",
    "Don't fear failure. Fear being in the exact same place next year.",
    "You miss 100% of the shots you don’t take.",
    "The only bad workout is the one that didn’t happen.",
    "Winners are not afraid of losing. But losers are.",
    "You’ve got what it takes, but it will take everything you’ve got.",
    "You don’t grow when you’re comfortable.",
    "A little progress each day adds up to big results.",
    "Mindset is everything.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Excuses don’t get results.",
    "Be stronger than your excuses.",
    "If it doesn’t challenge you, it won’t change you.",
    "Start now. Not tomorrow.",
    "Don't just exist, live.",
    "Focus on the step in front of you, not the whole staircase.",
    "Winners focus on winning. Losers focus on winners.",
    "Keep going. Everything you need will come to you.",
    "Either you run the day or the day runs you."
  ];

  favs: string[] = [
  ];
  currentQuote = this.quotes[0];

  constructor(public dataService: DataService) {}

  refreshQuote(): void {
    const i = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[i];
    this.dataService.addItem(this.currentQuote);
    console.log('New quote:', this.currentQuote);
  }

  addToFavs(): void {
    if(!this.favs.includes(this.currentQuote)){
      this.favs.push(this.currentQuote);
    }
  }
}
