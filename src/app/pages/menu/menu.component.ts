import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { CoffeeListComponent } from '../../components/coffee-list/coffee-list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CoffeeListComponent],
  template: `
    <app-header #header></app-header>

    <div class="pt-24 bg-brown-50 min-h-screen">
      <br><br><br>
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold mb-12 text-center text-brown-800">Our Menu</h1>

        <app-coffee-list (coffeeSelected)="handleCoffeeSelected($event)"></app-coffee-list>
      </div>
    </div>

    <footer class="bg-brown-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 Coffee Heaven. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .bg-brown-50 {
      background-color: #EFEBE9;
    }
    .text-brown-800 {
      color: #4E342E;
    }
    .bg-brown-900 {
      background-color: #3E2723;
    }
  `]
})
export class MenuComponent {
  handleCoffeeSelected(coffeeName: string) {
    // In a real application, we might want to handle this selection
    console.log(`Selected coffee from menu: ${coffeeName}`);
  }
}
