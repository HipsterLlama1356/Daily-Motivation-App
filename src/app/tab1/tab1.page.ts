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

  quotes: {[key: string]: string[]} = {
    Inspiration: [
      "Believe you can and you're halfway there.",
      "Dream it. Wish it. Do it.",
      "Make each day your masterpiece.",
      "Act like it’s impossible to fail.",
      "Stay hungry. Stay foolish.",
      "Mindset is everything.",
      "You miss 100% of the shots you don’t take.",
      "Don't just exist, live.",
      "Either you run the day or the day runs you.",
      "Keep going. Everything you need will come to you."
    ],
    Life: [
      "Little things make big days.",
      "Start where you are. Use what you have. Do what you can.",
      "You are stronger than you think.",
      "Great things take time. Be patient.",
      "Focus on the step in front of you, not the whole staircase.",
      "Sometimes later becomes never. Do it now.",
      "Push through the pain. Giving up hurts more.",
      "Don't fear failure. Fear being in the exact same place next year.",
      "If you get tired, learn to rest not to quit.",
      "A little progress each day adds up to big results."
    ],
    Productivity: [
      "Don't watch the clock; do what it does. Keep going.",
      "Push yourself, because no one else is going to do it for you.",
      "Don't stop when you're tired. Stop when you're done.",
      "Discipline is doing what needs to be done, even if you don't want to do it.",
      "The only bad workout is the one that didn’t happen.",
      "Excuses don’t get results.",
      "Be stronger than your excuses.",
      "Success is the sum of small efforts, repeated day in and day out.",
      "Success is what comes after you stop making excuses.",
      "Winners focus on winning. Losers focus on winners."
    ],
    Success: [
      "Success is not for the lazy.",
      "Great things never come from comfort zones.",
      "Success doesn’t just find you. You have to go out and get it.",
      "Work hard in silence. Let success make the noise.",
      "Don't dream of success. Work for it.",
      "Everything you’ve ever wanted is on the other side of fear.",
      "Doubt kills more dreams than failure ever will.",
      "Winners are not afraid of losing. But losers are.",
      "You’ve got what it takes, but it will take everything you’ve got.",
      "You don’t grow when you’re comfortable."
    ],
    Health: [
      "Wake up with determination. Go to bed with satisfaction.",
      "It's going to be hard, but hard does not mean impossible.",
      "Don't limit your challenges. Challenge your limits.",
      "Do something today that your future self will thank you for.",
      "Start now. Not tomorrow.",
      "The pain you feel today will be the strength you feel tomorrow.",
      "Your only limit is your mind.",
      "If it doesn’t challenge you, it won’t change you.",
      "The harder you work for something, the greater you'll feel when you achieve it.",
      "Do something your future self will thank you for."
    ]
  };

  favs: string[] = [];
  currentQuote: string = '';
  quoteCategory: string = '';

  constructor(public dataService: DataService) {
    this.refreshQuote();
  }

  refreshQuote(): void {
    const selectedCategories = this.dataService.chosenCategories;
    if(selectedCategories.length === 0){
      this.currentQuote = "Please select a category in settings.";
      return;
    }

    const randomCategory = selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
    const quotesArray = this.quotes[randomCategory];
    this.quoteCategory = randomCategory;
    this.currentQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

    this.dataService.addItem(this.currentQuote);
    console.log(`New quote (${randomCategory}):`, this.currentQuote);
  }

  addToFavs(): void {
    if(!this.favs.includes(this.currentQuote)){
      this.favs.push(this.currentQuote);
    }
  }
}
