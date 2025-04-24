import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';
import { Coffee } from '../../models/coffee.model';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CoffeeCardComponent],
  template: `
    <section class="py-12 bg-brown-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8 text-brown-800">Our Special Coffee</h2>

        <div class="mb-8 max-w-md mx-auto">
          <div class="relative">
            <input
              type="text"
              [(ngModel)]="searchTerm"
              (ngModelChange)="onSearch()"
              placeholder="Search coffee..."
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-400"
            >
            <span class="absolute right-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (coffee of coffeeService.getFilteredCoffees(); track coffee.id) {
            <app-coffee-card
              [coffee]="coffee"
              (orderCoffee)="onOrderCoffee($event)"
            ></app-coffee-card>
          }

          @empty {
            <div class="col-span-full text-center py-8">
              <p class="text-gray-500 text-lg">No coffee found matching your search.</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-brown-50 {
      background-color: #EFEBE9;
    }
    .text-brown-800 {
      color: #4E342E;
    }
    .focus\\:ring-brown-400:focus {
      --tw-ring-color: #8D6E63;
      --tw-ring-opacity: 1;
    }
  `]
})
export class CoffeeListComponent {
  searchTerm: string = '';
  coffeeService = inject(CoffeeService);

  // Output event to send selected coffee to parent
  coffeeSelected = output<string>();

  onSearch() {
    this.coffeeService.setSearchQuery(this.searchTerm);
  }

  onOrderCoffee(coffeeName: string) {
    this.coffeeSelected.emit(coffeeName);
  }
}
