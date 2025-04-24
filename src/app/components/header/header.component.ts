import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-brown-800 text-white p-4">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="logo mb-4 md:mb-0">
          <h1 class="text-3xl font-bold">Coffee Heaven</h1>
        </div>

        <nav class="flex space-x-6">
          <a routerLink="/" class="hover:text-brown-300">Home</a>
          <a routerLink="/about" class="hover:text-brown-300">About</a>
          <a routerLink="/menu" class="hover:text-brown-300">Menu</a>
          <a routerLink="/contact" class="hover:text-brown-300">Contact</a>
        </nav>

        <div class="order-info mt-4 md:mt-0" *ngIf="selectedCoffee()">
          <p class="bg-brown-600 p-2 rounded">Selected: {{ selectedCoffee() }}</p>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .bg-brown-800 {
      background-color: #5D4037;
    }
    .bg-brown-600 {
      background-color: #795548;
    }
    .hover\\:text-brown-300:hover {
      color: #D7CCC8;
    }
  `]
})
export class HeaderComponent {
  // Signal to store selected coffee name
  selectedCoffee = signal<string | null>(null);

  // Method to update selected coffee
  updateSelectedCoffee(coffeeName: string) {
    this.selectedCoffee.set(coffeeName);
  }
}
