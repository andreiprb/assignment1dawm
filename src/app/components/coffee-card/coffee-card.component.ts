import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../models/coffee.model';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="coffee-card bg-white rounded-lg shadow-md overflow-hidden">
      <img [src]="coffee().image" [alt]="coffee().name" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ coffee().name }}</h3>
        <p class="text-gray-600 mb-4">{{ coffee().description }}</p>
        <div class="flex justify-between items-center">
          <span class="text-lg font-bold text-brown-800">{{ '$' + coffee().price.toFixed(2) }}</span>
          <button
            (click)="orderCoffee.emit(coffee().name)"
            class="bg-brown-600 text-white px-4 py-2 rounded hover:bg-brown-700 transition-colors"
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
    }
    .coffee-card:hover {
      transform: translateY(-5px);
    }
    .bg-brown-600 {
      background-color: #795548;
    }
    .bg-brown-700:hover {
      background-color: #5D4037;
    }
    .text-brown-800 {
      color: #4E342E;
    }
  `]
})
export class CoffeeCardComponent {
  // Input for coffee item
  coffee = input.required<Coffee>();

  // Output event for ordering coffee
  orderCoffee = output<string>();
}
