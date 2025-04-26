import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../models/coffee.model';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="coffee-card bg-brown-900 rounded-lg shadow-md overflow-hidden">
      <img [src]="coffee().image" [alt]="coffee().name" class="w-full h-48 object-cover">
      <div class="p-4 card-content">
        <h3 class="text-xl font-semibold mb-2 text-white">{{ coffee().name }}</h3>
        <p class="text-white mb-4 description">{{ coffee().description }}</p>
        <div class="flex justify-between items-center">
          <span class="text-lg font-bold text-white">{{ '$' + coffee().price.toFixed(2) }}</span>
          <button
            (click)="orderCoffee.emit(coffee().name)"
            class="order-button bg-brown-600 text-white px-4 py-2 rounded-lg text-lg transition-all"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .coffee-card {
      transition: transform 0.3s ease;
      position: relative;
      min-height: 400px; /* Added min-height for consistent card size */
      display: flex;
      flex-direction: column;
    }
    .card-content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .description {
      flex-grow: 1;
    }
    .coffee-card:hover {
      transform: translateY(-5px);
    }
    .order-button {
      border: none;
      outline: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* shadow discret */
      transition: box-shadow 0.3s ease, background-color 0.3s ease;
      position: relative; /* ← adăugat */
      z-index: 10;
    }
    .order-button:hover {
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3); /* shadow mai puternic la hover */
      outline: none;
      background-color: #5D4037; /* brown-700 color */
    }
    .order-button:active {
      background-color: #3E2723 !important; /* brown 900 - și mai închis */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); /* shadow mai adânc */
      transform: scale(0.97); /* ușoară micșorare la click, pentru senzație de apăsare */
    }
    .bg-brown-600 {
      background-color: #795548;
    }
    .bg-brown-900 {
      background-color: #3E2723;
    }
    .text-brown-800 {
      color: #4E342E;
    }
    .text-brown-200 {
      color: #BCAAA4;
    }
  `]
})
export class CoffeeCardComponent {
  // Input for coffee item
  coffee = input.required<Coffee>();

  // Output event for ordering coffee
  orderCoffee = output<string>();
}
