import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CoffeeListComponent } from '../../components/coffee-list/coffee-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CoffeeListComponent, RouterLink],
  template: `
    <app-header #header></app-header>

    <main>
      <section class="hero bg-cover bg-center py-20" style="background-image: url('assets/images/coffee-banner.jpg')">
        <br><br>
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Experience the Perfect Brew
          </h1>
          <p class="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Discover our handcrafted coffees made with premium beans from around the world.
          </p>
          <button routerLink="/menu" class="menu-button bg-brown-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-brown-700 transition-all">
            View Our Menu
          </button>
        </div>
      </section>

      <app-coffee-list (coffeeSelected)="handleCoffeeSelected($event)"></app-coffee-list>

      <section class="about py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
              <img src="assets/images/coffee-shop.jpg" alt="Coffee Shop" class="rounded-lg shadow-lg w-full">
            </div>
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold mb-6 text-brown-800">About Our Coffee</h2>
              <p class="text-gray-700 mb-4">
                At Coffee Heaven, we're passionate about delivering the finest coffee experience.
                Our beans are ethically sourced from sustainable farms around the world.
              </p>
              <p class="text-gray-700 mb-4">
                Each cup is carefully crafted by our expert baristas who have mastered the art of brewing.
                We believe that great coffee isn't just a drink—it's an experience.
              </p>
              <p class="text-gray-700">
                Visit us today and discover why our customers keep coming back for more of our signature blends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-brown-900 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Coffee Heaven</h3>
            <p>Brewing perfect moments since 2010.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Coffee Street</p>
            <p>Brewville, CB 43210</p>
            <p>info&#64;coffeeheaven.com</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Hours</h3>
            <p>Monday - Friday: 7am - 8pm</p>
            <p>Saturday: 8am - 8pm</p>
            <p>Sunday: 9am - 6pm</p>
          </div>
        </div>
        <div class="mt-8 pt-6 border-t border-brown-700 text-center">
          <p>&copy; 2025 Coffee Heaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .menu-button {
      border: none;
      outline: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.3s ease, background-color 0.3s ease;
    }
    .menu-button:hover {
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
      outline: none;
    }
    .menu-button:active {
      background-color: #3E2723 !important; /* brown 900 - și mai închis */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); /* shadow mai adânc */
      transform: scale(0.97); /* ușoară micșorare la click, pentru senzație de apăsare */
    }
    .bg-brown-600 {
      background-color: #795548;
    }
    .hover\\:bg-brown-700:hover {
      background-color: #5D4037;
    }
    .bg-brown-900 {
      background-color: #3E2723;
    }
    .border-brown-700 {
      border-color: #5D4037;
    }
    .text-brown-800 {
      color: #4E342E;
    }
    .bg-brown-800 {
      background-color: #4E342E;
    }
    .drop-shadow-lg {
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.4));
    }
    .bg-brown-100 {
      background-color: #D7CCC8;
    }
  `]
})
export class HomeComponent {
  @ViewChild('header') headerComponent!: HeaderComponent;

  handleCoffeeSelected(coffeeName: string) {
    this.headerComponent.updateSelectedCoffee(coffeeName);
  }
}
