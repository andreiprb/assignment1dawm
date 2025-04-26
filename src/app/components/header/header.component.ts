import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="fixed-header semi-transparent-header text-white p-4 w-full z-50" style="z-index: 100">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="logo mb-4 md:mb-0">
          <h1 class="text-3xl font-bold logo-text">Coffee Heaven</h1>
        </div>

        <nav class="flex space-x-6">
          <a routerLink="/" class="nav-link hover:text-brown-300">Home</a>
          <a routerLink="/about" class="nav-link hover:text-brown-300">About</a>
          <a routerLink="/menu" class="nav-link hover:text-brown-300">Menu</a>
          <a routerLink="/contact" class="nav-link hover:text-brown-300">Contact</a>
        </nav>

        <div class="order-info mt-4 md:mt-0" *ngIf="selectedCoffee()">
          <p class="bg-brown-600 p-2 rounded">Selected: {{ selectedCoffee() }}</p>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .fixed-header {
      position: fixed;
      top: 0;
      left: 0;
    }
    .semi-transparent-header {
      background: linear-gradient(to bottom,
                 rgba(0, 0, 0, 0.9) 0%,
                  rgba(60, 50, 40, 0.7) 50%,
                  rgba(60, 50, 40, 0.5) 75%,
                 rgba(93, 64, 55, 0.0) 100%);
    }
    .bg-brown-600 {
      background-color: #795548;
    }
    .nav-link {
      color: #D7CCC8;  /* Dark brown color */
      text-decoration: none;
      font-weight: 500;
    }
    .hover\\:text-brown-300:hover {
      color: #3E2723;  /* Light brown on hover */
    }
    .logo-text {
      color: #D7CCC8; /* Light brown for logo text */
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
