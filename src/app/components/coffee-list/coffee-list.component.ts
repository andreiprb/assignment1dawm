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
              class="search-input"
            >
            <span class="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

    /* Stil nou pentru input */
    .search-input {
      width: 100%;
      padding: 0.75rem 2.5rem 0.75rem 1rem;
      border: 2px solid #D7CCC8;
      border-radius: 9999px;
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    .search-input:focus {
      border-color: #8D6E63;
      box-shadow: 0 0 0 4px rgba(141, 110, 99, 0.2);
      outline: none;
    }

    .search-icon {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: #A1887F;
      pointer-events: none;
    }

    /* Grid layout */
    .grid {
      display: grid;
    }
    .grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    @media (min-width: 640px) {
      .sm\\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    @media (min-width: 1024px) {
      .lg\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  `]
})
export class CoffeeListComponent {
  searchTerm: string = '';
  coffeeService = inject(CoffeeService);

  coffeeSelected = output<string>();

  onSearch() {
    this.coffeeService.setSearchQuery(this.searchTerm);
  }

  onOrderCoffee(coffeeName: string) {
    this.coffeeSelected.emit(coffeeName);
  }
}
